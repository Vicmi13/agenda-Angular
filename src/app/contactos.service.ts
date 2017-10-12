import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from './contacto'

//El decorador @injectable indica que la clase debe comportarse como un servicio
@Injectable()
export class ContactosService {

  constructor( private _httpClient : HttpClient){}

  //esto es como el GETTER de Java
  obtenerContactos () : Observable <Contacto[]> { //regresa un tipo string Array
    return this._httpClient.get<Contacto[]> ('htpp://localhost:3004/contactos');
  }

  agregarContacto(contacto : Contacto): Observable <Contacto> {
    return this._httpClient.post<Contacto> ('htpp://localhost:3004/contactos', contacto);
  }

eliminarContacto(contacto: Contacto) : Observable <Contacto>{ //string y void son opcionales solo es para tener mejor referencia
    return this._httpClient.delete<Contacto> (`htpp://localhost:3004/contactos/${contacto.id}`);
  }

}
