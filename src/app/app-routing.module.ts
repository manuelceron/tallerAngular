import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes} from "@angular/router";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { InventarioComponent } from "./inventario/inventario.component";


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inventario',
        pathMatch: 'full'
    },
    {
        path: 'inventario',
        component: InventarioComponent
    },
    {
        path: 'catalogo',
        component: CatalogoComponent
    }
    ];
    
    @NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule {}