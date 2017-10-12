import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { RutaAComponent} from '../ruta-a/ruta-a.component'
import { RutaBComponent} from '../ruta-b/ruta-b.component'

const rutas : Routes = [
  {
    //cuando se define una ruta no e define barra incial
    path: 'lista-contactos',
    component: RutaAComponent
  },
  {
    path: 'nuevo-contacto',
    component: RutaBComponent
  },
  {
    // **quiere decir 'lo que sea' 
    path: '**', 
    pathMatch: 'full',
    redirectTo: '/lista-contactos'
    //cuando se redirige si se define barra
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
