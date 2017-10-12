import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
//1.- Se importa el servicio
import { ContactosService } from '../contactos.service';

@Component({
 // selector: 'app-ruta-a', Se elimino
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {

  nombres: Contacto[];
  contactoSeleccionado : Contacto;

   //2.-Se inyecta el servicio de tipo private así inidca que se inyecta el servicio
    //Para hacer la inyeccion se debe hacer siempre en el constructor de la clase
    //Anotamos un parametro con el tipo de servicio a inyectar y añadimos el modificador de acceso 'private'
    constructor(private _contactosService : ContactosService){
      console.log('Componente instanciado y servicio inyectado');
    }

  /*El Hook OnInit se ejecuta cuando el componente tiene asociado 
   su template correspondiente por tanto es el momento ideal
   para enlazar datos
   */
   ngOnInit(): void { 
    console.log('Estoy en el HOOK on init');
    this._contactosService.obtenerContactos().subscribe( (contactos : Contacto[]) => {
        this.nombres = contactos;
    } );
  }

  eliminarContacto(nombre: Contacto): void{
    this._contactosService .eliminarContacto(nombre);
    this.nombres = this._contactosService.obtenerContactos();
  }

  verDetalles(nombre : Contacto) : void {
      this.contactoSeleccionado = nombre;
  }

}
