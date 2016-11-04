import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2/auth';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(valid, value){
    console.log("form submitted!");
    console.log(valid); //true
    console.log(value); //object{email,password}
    
  }
}
// export class AppComponent {
//   isSignedIn: boolean;

//   SignInForm: FormGroup;
//   email: AbstractControl;
//   pcode: AbstractControl;

//   SignUpForm: FormGroup;
//   emailid: AbstractControl;
//   pword: AbstractControl;

//   constructor(private af: AngularFire, fb: FormBuilder){
//     this.isSignedIn = false;

//     this.SignInForm = fb.group({
//       'email': ['', Validators.required],
//       'pcode': ['', Validators.required] 
//     });
//      this.email = this.SignInForm.controls['email']; 
//      this.pcode = this.SignInForm.controls['pcode'];

//      this.SignUpForm = fb.group({
//        'emailid': ['', Validators.required],
//        'pword': ['', Validators.required]
//      });
//      this.emailid = this.SignUpForm.controls['emailid'];
//      this.pword = this.SignUpForm.controls['pword'];
//   }
//   SignIn(user, code) {
//     // this.af.auth.login(); // Google login
//     this.af.auth.login(
//       {email: user , password: code},
//       {provider: AuthProviders.Password, method: AuthMethods.Password}
//     ).then((res)=>{
//         alert(res);
//         this.isSignedIn = true;
//     },(err)=>{
//         alert(err);
//     });
//   }
//   SignOut() {
//     this.af.auth.logout();
//     this.isSignedIn = false;
//   }
//   createNewUser({email,password}) { // sign up
//     this.isSignedIn = true;
//     return this.af.auth.createUser(
//       { email: email, password: password }
//     );
//   }
//   onSignIn(signInForm) {
//     console.log("Sign in called : " + signInForm);
//   }
//   onSignUp(signUpForm){
//     console.log("Sign up called : " + signUpForm);
//   }
// }