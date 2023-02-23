import { Component, OnInit } from '@angular/core';
import { Fruits } from 'src/assets/data/data';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

public listaFrutas = Fruits.LIST;

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
