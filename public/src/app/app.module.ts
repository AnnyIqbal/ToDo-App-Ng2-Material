import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

import { KeysPipe } from './pipe';
import 'hammerjs';

const firebaseConfig = {
    apiKey: 'AIzaSyDOm3dwJYOO6ARNd1VhOQfaum31YbjWziE',
    authDomain: 'todoapp-ngmaterial2.firebaseapp.com',
    databaseURL: 'https://todoapp-ngmaterial2.firebaseio.com',
    storageBucket: 'todoapp-ngmaterial2.appspot.com',
    messagingSenderId: '87162505749'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}