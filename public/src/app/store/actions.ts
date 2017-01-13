import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class MyActions{

    // actions

    static ADD_TASK = 'ADD_TASK';
    static DLT_TASK = 'DLT_TASK';
    static EDIT_TASK = 'EDIT_TASK';

    constructor(private ngRedux: NgRedux<{}>) { }

    // action controllers

    addTask(task) {
        this.ngRedux.dispatch({ type: MyActions.ADD_TASK, payload: task });
    }

    dltTask() {
        this.ngRedux.dispatch({ type: MyActions.DLT_TASK });
    }

    editTask(task) {
        this.ngRedux.dispatch({ type: MyActions.EDIT_TASK, payload: task });
    }

}