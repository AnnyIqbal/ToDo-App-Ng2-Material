import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import "rxjs/add/operator/take";    

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private af: AngularFire, private route: Router) { }
    canActivate() {
        return this.af.auth.map(user => {
            if (user != null) {
                console.log('true');
                return true;
            }
            else {
                console.log('false');
                alert("Access Denied! Please LogIn to continue...");
                this.route.navigate(['home']);
                return false;

            }
        })
            .take(1) // To make the observable complete after the first emission   


    }
}