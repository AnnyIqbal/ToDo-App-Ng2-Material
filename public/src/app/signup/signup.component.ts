import { MyActions } from './../store/actions';
import { Observable } from 'rxjs';
import { select } from 'ng2-redux';
import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { FirebaseAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

@select(['User', 'status'])
user$: Observable<any>;

  constructor(
    private af: AngularFire,
    private route: Router,
    private a: MyActions
  ) {}

  SignUp(user) {
    // 'signup' action dispatched from redux
    this.a.signUp(user);

    // this.createNewUser(user);
    alert(` Hi ${user.uname}, Welcome to the To Do App! `);
    this.af.auth.createUser(
      { email: user.emlid, password: user.pcode }
    );
    this.route.navigate(['tasklist']); //navigate to todoapp
  }
}
