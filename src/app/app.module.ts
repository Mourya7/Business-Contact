import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyDaFBEYVq_BQx9ybfKSvt9PpXA-30RgJ8g',
  authDomain: 'businesscontacts-c134c.firebaseapp.com',
  databaseURL: 'https://businesscontacts-c134c.firebaseio.com',
  storageBucket: 'businesscontacts-c134c.appspot.com',
  messagingSenderId: '648318718910'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
