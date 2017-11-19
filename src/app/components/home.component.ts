import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: '../views/home.html'
})
export class HomeComponent implements OnInit {
  public title: string;
  public subTitle: string;

  constructor() {
    this.title = 'Blog';
    this.subTitle = 'Listado de los últimos artículos creados en el blog.'
  }

  ngOnInit() {
    console.log('Se ha cargado el componente Home');
  }
}
