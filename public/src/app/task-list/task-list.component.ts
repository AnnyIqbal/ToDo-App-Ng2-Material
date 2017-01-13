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
  index: string;
  editFlag: boolean = false;
  show: boolean = false;
  item: FirebaseListObservable<any> ;

    @select(['Tasks', 'todo']) state$: Observable<any>; // @select(['property of obj :1st arg is obj 2nd arg is its property'])
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
  }
  SignOut() {
    this.af.auth.logout();
    this.route.navigate(['home']); // navigate back to home page
    alert('Please Sign In to continue...');
  }

  checker(inputValue) { // chk for empty field and whitespace
    if (inputValue.length !== 0 && inputValue !== ' ') {
      this.addTask(inputValue);
    }
  }

  addTask(inputField, key?) {
      if (this.editFlag === true) { // edit Task
        this.editFlag = false;
        this.item.update(this.index, {index: inputField.value}); // update (key, {object});

        // 'edit' action dispatched from redux
        this.a.editTask(inputField.value);

        inputField.value = '';
        this.show = false;
      }
      else if (this.editFlag === false) { // add Task
        setTimeout(function(){
          inputField.focus();
          }, 100);
        this.item.push({index: inputField.value}); //add item

        // 'add action' dispatched from redux
        this.a.addTask(inputField.value);

        inputField.value = '';
        this.show = false;
      }
}
  dltTask(key) {
    this.item.remove(key);
    // 'dlt' action dispatched from redux
    this.a.dltTask();
  }
  editTask(eTask, i, inputField) {
    this.editFlag = true;
    this.index = i; // key moved to var index
    inputField.value = eTask; // loaded task in input field 
    this.show = true;
    setTimeout(function(){ // set focus with some time delay
      inputField.focus();
    }, 100);
  }
  focusedDisplay(inputField) { // set focus on input field
    this.show = true;
    setTimeout(function(){
      inputField.focus();
      }, 10);
  }
}
