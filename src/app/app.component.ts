import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO APP';
  taskList = JSON.parse(localStorage.getItem('list')) || [];
  newTask;
  index: number;
  editFlag: boolean = false;
  show: boolean = false;
  item: FirebaseListObservable<any> ;

  constructor(private af: AngularFire) {
    // const name: FirebaseListObservable<any> = af.database.list('/list'); // data as array
    // const relative = af.database.object('/'); // data as object
    this.item = af.database.list('/todo');
    console.log(this.item,"-------------------------------------------")
    // relative.set({ name: 'new name!'}); // sets the object, removes old value and set to new value
    // relative.set({id: '1'});
    // relative.update({name: 'Anny'}); // old value me add this also
    // relative.remove(); // poora item hi urra dega jo b ho usme
  }

  checker() { // chk for empty field and whitespace
    if (this.newTask.length !== 0 && this.newTask !== ' ') {
      this.addTask();
    }
  }

  addTask(key?) {
      if (this.editFlag === true) { // edit Task
        this.taskList.splice(this.index , 1, this.newTask);
        localStorage.setItem('list', JSON.stringify(this.taskList));
        this.editFlag = false;
        this.item.update(key, {index: this.newTask});
        this.newTask = '';
        this.show = false;
      }
      else if (this.editFlag === false) { // add Task
        this.taskList.push(this.newTask);
        localStorage.setItem('list', JSON.stringify(this.taskList));
        this.item.push({index: this.newTask});
        // update({index: this.newTask});
        this.newTask = '';
        this.show = false;
      }
}
  dltTask(i) {
    this.taskList.splice(i, 1); // i = index of task where dlt button was clicked
    localStorage.setItem('list', JSON.stringify(this.taskList));
    this.item.remove();
  }

  editTask(eTask, i) {
    this.editFlag = true;
    this.index = i;
    this.newTask = eTask; // loaded task in input field 
    this.show = true;
    this.newTask.autofocus();
  }
}

/*
var abc = JSON.parse(localStorage.getItem("list")) || [];
localStorage.setItem("list", JSON.stringify(abc));
*/
