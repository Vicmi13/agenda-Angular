import { Component } from '@angular/core';

@Component({
  //Indica el selector CSS encargado  de seleccionar el elem HTML  en el
  //cual instnaciar el componente
  selector: 'app-root',

  //Indicamos la ruta al template [documento HTML]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //Se pueden tener varios docs CSSS, ver que es un array
})
export class AppComponent {
  //constructor(public ruedas: number, public puertas: number){
    //Ya no es necesario definir los parametros debido al modificador de acceso 'public' 
  //}

    
 

}
