import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2/auth';
//import {FormBuilder, ReactiveFormsModule, RequiredValidator, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSignedIn: boolean;

  constructor(private af: AngularFire){
    this.isSignedIn = false;
  }
      onSignIn(value) {
        // this.af.auth.login(); // Google login
        this.af.auth.login(
          {email: value.eml , password: value.pass}, //xyz@todo.com, xyzxyz
          {provider: AuthProviders.Password, method: AuthMethods.Password}
        ).then((res)=>{
            //alert(res);
            this.isSignedIn = true;
        },(err)=>{
            alert(err);
        });
      }

  //   onSignIn(valid, value, eml){
  //     console.log("form submitted!", eml);
  //     console.log(valid); //true
  //     console.log(value); //object{eml,pass}
  // }
 
  SignOut() {
    this.af.auth.logout();
    this.isSignedIn = false;
  }

  createNewUser({email,password}) { // sign up
    this.isSignedIn = true;
    return this.af.auth.createUser(
      { email: email, password: password }
    );
  }
}