import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

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
      this.af.auth.login({ email: 'admin@todoapp.com', password: 'password'});
      alert("done");
      this.isSignedIn = true;
    }
}