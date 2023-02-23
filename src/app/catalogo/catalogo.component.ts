import { Component } from '@angular/core';
import { Fruits } from 'src/assets/data/data';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  public listaFrutas = Fruits.LIST;
}
