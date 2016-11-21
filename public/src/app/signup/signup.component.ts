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

  constructor(private af: AngularFire, private route: Router) { }

  SignUp(user) {
    // this.createNewUser(user);
    alert(` Hi ${user.uname}, Welcome to the To Do App! `);
    this.af.auth.createUser(
      { email: user.emlid, password: user.pcode }
    );
    this.route.navigate(['tasklist']); //navigate to todoapp
  }
}
