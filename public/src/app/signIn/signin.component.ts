import { Component } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignIn {
    Signin(user, code) {
        if((user.value !== '' && user.value != ' ') && (code.value !== '' && code.value != ' ')) {
            alert("Sign-In Successful!");
        }
        else {
            alert("Please enter details!");
        }
    }
 }
