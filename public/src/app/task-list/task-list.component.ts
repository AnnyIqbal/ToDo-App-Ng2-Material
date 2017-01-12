import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { MyActions } from './../store/actions';
import { select } from 'ng2-redux';

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
  
    @select(['state','Tasks','todo']) state$: Observable<any>; // @select(['property of obj :1st arg is obj 2nd arg is its property'])
  constructor(
    private af: AngularFire, 
    private route: Router,
    private a: MyActions
    ) {
    this.item = af.database.list('/todo');
    // const name: FirebaseListObservable<any> = af.database.list('/list'); // data as array
    // const relative = af.database.object('/'); // data as object

    // relative.set({ name: 'new name!'}); // sets the object, removes old value and set to new value
    // relative.set({id: '1'});
    // relative.update({name: 'Anny'}); // old value me add this also
    // relative.remove(); // poora item hi urra dega jo b ho usme

this.state$.subscribe(x => console.log('state: '+ x));

  }
  SignOut() {
    this.af.auth.logout();
    this.route.navigate(['home']); //navigate back to home page
    alert("Please Sign In to continue...");
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
// edit action dispatched
        this.a.editTask(this.newTask);
      }
      else if (this.editFlag === false) { // add Task
        setTimeout(function(){
          this.newTask.focus();
          }, 100);
        this.item.push({index: this.newTask});
        this.newTask = '';
        this.show = false;
// add action dispatched
        this.a.addTask(this.newTask);
      }
}
  dltTask(key) {
    this.item.remove(key);
// action dispatched
    this.a.dltTask(this.newTask);
  }
  editTask(eTask, i, inputTask) {
    this.editFlag = true;
    this.index = i; // key moved to var index
    this.newTask = eTask; // loaded task in input field 
    this.show = true;
    setTimeout(function(){ // set focus with some time delay
      inputTask.focus();
    }, 100);
  }
  focusedDisplay(inputTask) { // set focus on input field
    this.show = true;
    setTimeout(function(){
      inputTask.focus();
      }, 10);
  }
}
