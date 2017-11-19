import {Component} from "@angular/core";

@Component({
  selector: 'error',
  templateUrl: '../views/error.html'
})
export class ErrorComponent {

  public title: string;
  public description: string;

  constructor() {
    this.title = 'ERROR';
    this.description = 'La página a la que se está intentando acceder no existe.';
  }
}
