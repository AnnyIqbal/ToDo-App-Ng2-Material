import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO APP';
  taskList = JSON.parse(localStorage.getItem('list')) || [];
  newTask;
  index: number;
  editFlag: boolean = false;
  show: boolean = false;

  checker() { // chk for empty field and whitespace
    if (this.newTask.length !== 0 && this.newTask !== ' ') {
      this.addTask();
    }
  }
  addTask() {
      if (this.editFlag === true) { // edit Task
        this.taskList.splice(this.index , 1, this.newTask);
        localStorage.setItem('list', JSON.stringify(this.taskList));
        this.editFlag = false;
        this.newTask = '';
        this.show = false;
      }
      else if (this.editFlag === false) { // add Task
        this.taskList.push(this.newTask);
        localStorage.setItem('list', JSON.stringify(this.taskList));
        this.newTask = '';
        this.show = false;
      }
}
  dltTask(i) {
    this.taskList.splice(i, 1); // i = index of task where dlt button was clicked
    localStorage.setItem('list', JSON.stringify(this.taskList));
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
