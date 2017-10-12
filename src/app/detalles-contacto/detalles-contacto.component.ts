import { Component, Input } from '@angular/core';
import { Contacto } from '../Contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent  {

  @Input() contacto : Contacto;  //Se expone el atributo , asi un componente padre pueda enlazar datos

}
