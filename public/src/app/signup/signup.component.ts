import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private af: AngularFire) { }

  createNewUser(user) { // sign up
    return this.af.auth.createUser(
      { email: user.emlid, password: user.pcode }
    );
  }
}
