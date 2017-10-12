import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RutaAComponent } from './ruta-a/ruta-a.component';
import { RutaBComponent } from './ruta-b/ruta-b.component';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';

// Usamos el decorador NgModule para que la clase decorada se comporte como un modulo
@NgModule({
  /*En el metadato 'declarations' indicamos todos aquellos directivas, pipes
  componentes de la aplicacion
  */
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent,
    RutaAComponent,
    RutaBComponent,
    DetallesContactoComponent
  ],
  /*Inidacamos todos aquellos modulos de los cuales
  mi aplicación depende
  */
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,//Modulo para peticiones Http
    AppRoutingModule
  ],
  /*Indicamos todos aquellos proveedores de clase
  que puedan ser inyectados
  */
  providers: [
    //Servicio que cree
    ContactosService
  ],
  /*Inidcamos el componente raiz apartir
  del cual se construye toda la aplicación
  */
  bootstrap: [AppComponent] //NO darle importancia al nombre, se puede cambiar ->Bootstrap
})
export class AppModule { }
