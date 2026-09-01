import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "Search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  busqueda = "";
  productos = [
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Pan", categoria: "Panaderia" }
  ];

  constructor(private router: RouterExtensions) {}

  ngOnInit(){}

  get productosFiltrados(){
    return this.productos.filter(p => p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}