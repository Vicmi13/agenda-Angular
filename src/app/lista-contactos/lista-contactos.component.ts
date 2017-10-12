import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto'

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent  {
  //Con el decorador 'Output' exponemos un evento para que un componente 
  //padre pueda suscribirse a él. Además este evento debe ser un 'EventEmitter'
  //del tipo deseado 
  @Output() botonEliminarPulsado = new EventEmitter<Contacto >();
  @Output() contactosSeleccionados = new EventEmitter<Contacto>();
  
  //Con el decorador 'Input' exponemos un atributo para que un componente padre
  //pueda enlazar datos al hijo 
  @Input() contactos: Contacto [];

  notificarElminacionContacto(contacto : Contacto) : void{
    //Se notitican datos al componente padre gracias a la funcion 'emit'de 
    //nuestro 'EventEmitter'
    this.botonEliminarPulsado.emit(contacto);
  }

  notificarSeleccionContacto (contacto : Contacto ) : void {
    this.contactosSeleccionados.emit(contacto);
  }

}
