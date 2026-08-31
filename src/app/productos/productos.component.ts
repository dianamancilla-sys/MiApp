import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Application } from '@nativescript/core';

@Component({
  selector: 'Productos',
  templateUrl: './productos.component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductosComponent implements OnInit {
  productos = ['Producto 1', 'Producto 2', 'Producto 3'];
  plataforma = 'Mi Plataforma';

  constructor() {}
  ngOnInit(): void {}

  onDrawerButtonTap(): void {
    const sideDrawer = Application.getRootView() as any;
    if (sideDrawer && sideDrawer.showDrawer) {
      sideDrawer.showDrawer();
    }
  }
}