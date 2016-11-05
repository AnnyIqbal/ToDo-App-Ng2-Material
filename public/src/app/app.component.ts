import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2/auth';
//import {FormBuilder, ReactiveFormsModule, RequiredValidator, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './routing.html', //'./app2.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSignedIn: boolean;

  constructor(private af: AngularFire){
    this.isSignedIn = false;
  }

  createNewUser(user) { // sign up
    this.isSignedIn = true;
    return this.af.auth.createUser(
      { email: user.emlid, password: user.pcode }
    );
  }
}