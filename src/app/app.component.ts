import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-store-fruits';

  constructor(public _router: Router){}

  irCatalogo(){
    this._router.navigate(['catalogo']);
  }
  irInventario(){
    this._router.navigate(['inventario']);
  }
}
