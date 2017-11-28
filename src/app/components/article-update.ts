import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ArticlesService} from "../services/articles.service";
import {Article} from "../models/article";

@Component({
  selector: 'article-update',
  templateUrl: '../views/article-update.html',
  providers: [ArticlesService]
})
export class ArticleUpdateComponent implements OnInit {
  public titleNew: string;
  public articulo: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) {
    this.titleNew = 'Create new Article';
    this.articulo = new Article(null, '', '', null, '', null);
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ARTICLE');
  }

  onSubmit() {
    console.log(this.articulo);
    this.articlesService.addArticle(this.articulo).subscribe(
      result => {
        console.log("Artículo guardado: " + result);
        this.router.navigate(['/articles']);
      },
      error => {
        console.log(<any>error);
        alert('Se ha producido un error.');
      }
    );
  }

}
