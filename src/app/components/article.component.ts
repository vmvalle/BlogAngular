import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticlesService} from "../services/articles.service";
import {Article} from "../models/article";

@Component({
  selector: 'article-add',
  templateUrl: '../views/article-add.html',
  providers: [ArticlesService]
})
export class ArticleComponent implements OnInit {
  public title: string;
  public article: Article;

  constructor() {
    this.title = 'Create new Article';
    this.article = new Article(null, '', '', null, '', null);
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ARTICLE');
  }

  onSubmit() {
    console.log(this.article);
  }

}
