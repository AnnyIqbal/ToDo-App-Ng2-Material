import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './routing.html', //'./app2.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private af: AngularFire){}

}