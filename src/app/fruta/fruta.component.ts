import { Component } from '@angular/core';

//Decorador: da funcionalidad extra a las clases que tenemos abajo
//propiedades del decorador
// selector
//templateUrl
//styleUrls
@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
  })

  
  export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Componente de fruta';
  }
  