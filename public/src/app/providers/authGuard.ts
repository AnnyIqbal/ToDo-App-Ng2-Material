import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import "rxjs/add/operator/take";    

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private af: AngularFire) { }
    canActivate() {
        return this.af.auth.map(user => {
            if (user != null) {
                console.log('true')
                return true;
            }
            else {
                console.log('false')
                return false;

            }
            //   this.router.navigate(['/login'])
        })
            .take(1) // To make the observable complete after the first emission   


    }
}