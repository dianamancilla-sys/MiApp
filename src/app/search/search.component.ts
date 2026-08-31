import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application, action } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SearchComponent implements OnInit {
  busqueda = "";
  productos = [
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Pan", categoria: "Panadería" },
    { nombre: "Leche", categoria: "Lácteo" }
  ];

  get productosFiltrados() {
    return this.productos.filter(p => p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  // 2. Navegación a detalle
  verDetalle(args) {
    this.router.navigate(['/detail', args.index]);
  }

  // 3. Pull to refresh
  onPull(args) {
    const listView = args.object;
    this.productos.push({ nombre: "Nuevo " + Date.now().toString().slice(-3), categoria: "Random" });
    setTimeout(() => {
      listView.notifyPullToRefreshFinished();
    }, 500);
  }

  // 4. Action dialog + 5. Toast
  cambiarCategoria(item) {
    action({
      title: "Elige categoría",
      actions: ["Fruta", "Panadería", "Lácteo", "Otro"],
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result!== "Cancelar") {
        item.categoria = result;
        const { Toast } = require("@nativescript/core");
        Toast.makeText("Categoría cambiada a " + result).show();
      }
    });
  }

  // 8 y 9. Gesto doubleTap + animación rotate
  animar(args) {
    args.object.animate({ rotate: 360, duration: 800 }).then(() => {
      args.object.rotate = 0;
    });
  }
}