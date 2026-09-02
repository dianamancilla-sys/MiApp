import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Router, RouterExtensions } from '@nativescript/angular';
import { firebase } from '@nativescript/firebase';
import { Toasty } from '@triniwiz/nativescript-toasty';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.init({}).then(() => {
      firebase.addOnMessageReceivedCallback((message: any) => {
        new Toasty({ text: message.title, duration: Toasty.LENGTH_LONG }).show();
      });
    });
  }
}