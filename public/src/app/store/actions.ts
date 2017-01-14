import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class MyActions{

    // actions

    static ADD_TASK = 'ADD_TASK';
    static DLT_TASK = 'DLT_TASK';
    static EDIT_TASK = 'EDIT_TASK';
    static SIGN_IN = 'SIGN_IN';
    static SIGN_UP = 'SIGN_UP';
    static SIGN_OUT = 'SIGN_OUT';

    constructor(private ngRedux: NgRedux<{}>) { }

    // action controllers

    addTask(task) {
        this.ngRedux.dispatch({ type: MyActions.ADD_TASK, payload: task });
    }

    dltTask(task) {
        this.ngRedux.dispatch({ type: MyActions.DLT_TASK, payload: task });
    }

    editTask(task) {
        this.ngRedux.dispatch({ type: MyActions.EDIT_TASK, payload: task });
    }

    signIn() {
        this.ngRedux.dispatch({ type: MyActions.SIGN_IN, payload: 'loggedIn' });
    }

    signUp(status) {
        this.ngRedux.dispatch({ type: MyActions.SIGN_UP, payload: status });
    }

    signOut() {
        this.ngRedux.dispatch({ type: MyActions.SIGN_OUT, payload: 'loggedout' });
    }
}