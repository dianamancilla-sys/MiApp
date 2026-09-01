import { Component, OnInit } from '@angular/core';
import * as AppSettings from '@nativescript/core/application-settings';

@Component({
  selector: "Settings",
  templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
  usuario = "";

  ngOnInit() {
    this.usuario = AppSettings.getString("usuario", "");
  }

  guardar() {
    AppSettings.setString("usuario", this.usuario);
    alert("Usuario guardado: " + this.usuario);
  }
}