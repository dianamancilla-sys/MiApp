import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import * as AppSettings from '@nativescript/core/application-settings';
import { Store } from '../store';
import * as camera from "@nativescript/camera";
@Component({
  selector: "Search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  busqueda = "";
  productos: any[] = [];
  usuario = "";

  constructor(private searchService: SearchService, private store: Store) {}

  ngOnInit() {
    this.usuario = AppSettings.getString("usuario", "Diana");
    this.buscar();
  }

  buscar() {
    this.searchService.buscar(this.busqueda).subscribe(data => {
      this.productos = data;
    });
  }

  favorito(item: any) {
    this.searchService.guardarFavorito(item);
  }

  leerAhora(item: any) {
    this.store.dispatch({ type: 'LEER_AHORA', payload: item });
    alert(item.nombre + " agregado a Leer ahora");
  }
}  tomarFoto() {
    camera.requestPermissions().then(() => {
      camera.takePicture().then((imageAsset) => {
        alert("Foto tomada!");
        console.log(imageAsset);
      });
    });
  }