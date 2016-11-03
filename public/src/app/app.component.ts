import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

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
  Signin(user, code) {
    // this.af.auth.login();
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
}