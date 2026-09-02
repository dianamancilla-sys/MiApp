import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { firebase } from "@nativescript/firebase";
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
@NgModule({

  imports: [AppComponent, AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule],

  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { 
  constructor() {
    firebase.init({
      onMessageReceivedCallback: (message) => {
        console.log("Firebase Token:", message);
      }
    });
  }
}
