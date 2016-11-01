import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2/index';
import { KeysPipe } from './pipe';
import 'hammerjs';

  export const firebaseConfig = {
    apiKey: 'AIzaSyDOm3dwJYOO6ARNd1VhOQfaum31YbjWziE',
    authDomain: 'todoapp-ngmaterial2.firebaseapp.com',
    databaseURL: 'https://todoapp-ngmaterial2.firebaseio.com',
    storageBucket: 'todoapp-ngmaterial2.appspot.com',
    messagingSenderId: '87162505749'
  };


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
