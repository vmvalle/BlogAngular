import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'article-add',
  templateUrl: '../views/article-add.html'
})
export class ArticleComponent implements OnInit {
  public title: string;
  public subTitle: string;

  constructor() {
    this.title = 'Create new Article';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ARTICLE');
  }
}
