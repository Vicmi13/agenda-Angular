import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto} from '../contacto';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent  {

  formulario : FormGroup;
  @Output() botonGuardarPulsado = new EventEmitter<Contacto> ();
  
  /* Inyectamos como dependencia 'FormBuilder'. Con esta clase podemos
  crear nuevos 'FormGroup', indicando todas las propiedades 
  que queremos recoger del formulario HTML  */ 
  constructor(private _formBuilder: FormBuilder) {
    this.crearFormulario();
   }

  private crearFormulario () :void {
    //para crear un nuevo 'FormGroup' debemos indicar en un objeto
    //json las props que recogeremos del formulario HTML
    this.formulario = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required]
    });
  }

 

  notificarGuardadoContacto () : void{
    //Tenemos disponibles los valores que el usuario indica en un
    //formulario a través de la propiedad 'value' del 'FormGroup' 
    //console.log('valores' + this.formulario.value);
    const contacto: Contacto = this.formulario.value as Contacto;
    //Se utiliza 'as' para que se comporte como un tipo en especifico
    this.botonGuardarPulsado.emit(contacto);

  }



}
