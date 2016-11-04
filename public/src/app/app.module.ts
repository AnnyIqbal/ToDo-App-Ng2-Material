import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
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

// const routes: Routes = [ 
//   { path: '', redirectTo: 'home', pathMatch: 'full' }, 
//   { path: 'home', component: HomeComponent },
//   { path: 'signin', component: SigninComponent }, 
//   { path: 'signup', component: ContactComponent }, 
//   { path: 'tasklist', component: TaskListComponent, redirectTo: 'contact' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TaskListComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}