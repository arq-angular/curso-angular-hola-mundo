import { Component } from '@angular/core';

//Decorador: da funcionalidad extra a las clases que tenemos abajo
//propiedades del decorador
// selector
//templateUrl
//styleUrls
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular-hola-mundo';
}
