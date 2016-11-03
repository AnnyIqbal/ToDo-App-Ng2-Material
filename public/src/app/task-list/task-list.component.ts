import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  title = 'TO DO APP';
  newTask;
  index: string;
  editFlag: boolean = false;
  show: boolean = false;
  item: FirebaseListObservable<any> ;

  constructor(private af: AngularFire) {
    this.item = af.database.list('/todo');
    // const name: FirebaseListObservable<any> = af.database.list('/list'); // data as array
    // const relative = af.database.object('/'); // data as object

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
        this.editFlag = false;
        this.item.update(this.index, {index: this.newTask}); // update (key, {object});
        this.newTask = '';
        this.show = false;
      }
      else if (this.editFlag === false) { // add Task
        this.item.push({index: this.newTask});
        this.newTask = '';
        this.show = false;
      }
}
  dltTask(key) {
    this.item.remove(key);
  }

  editTask(eTask, i) {
    this.editFlag = true;
    this.index = i; // key moved to var index
    this.newTask = eTask; // loaded task in input field 
    this.show = true;
    this.newTask.autofocus();
  }
}
