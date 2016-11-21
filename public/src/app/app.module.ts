import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './providers/authGuard';
import { KeysPipe } from './pipes/pipe';
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

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},  
  { path: 'tasklist', component: TaskListComponent,
   canActivate: [
    AuthGuard
  ] },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TaskListComponent,
    HomeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}