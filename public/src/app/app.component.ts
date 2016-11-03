import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn: boolean;
  constructor(private af: AngularFire){
    this.isSignedIn = false;
  }
  SignIn(user, code) {
    // this.af.auth.login(); // Google login
    this.af.auth.login(
      {email: user , password: code},
      {provider: AuthProviders.Password, method: AuthMethods.Password}
    ).then((res)=>{
        console.log(res);
        this.isSignedIn = true;
    },(err)=>{
        console.log(err);
    });
  }
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
  onSignIn(signInForm) {
    console.log("Sign in called : " + signInForm);
  }
  onSignUp(signUpForm){
    console.log("Sign up called : " + signUpForm);
  }
}