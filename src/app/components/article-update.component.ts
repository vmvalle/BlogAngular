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
  public titleUpdate: string;
  public articulo: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) {
    this.titleUpdate = 'Update Article';
    this.route.params.forEach( (params: Params) => {
      let id = params['id'];
      this.articlesService.getArticle(id).subscribe(
        response => {
          console.log(response);
          this.articulo = response as Article;
        },
        error => {
          console.log(<any>error);
          this.router.navigate(['/articles', {"errorMsg": "The article could not be showed"}]);
        }
      );
    });
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ArticleUpdateComponent');
  }

  onSubmit() {
    console.log(this.articulo);
    this.articlesService.updateArticle(this.articulo).subscribe(
      result => {
        console.log("Artículo actualizado: " + result);
        this.router.navigate(['/articles', {"successMsg": "Article successfully updated"}]);
      },
      error => {
        console.log(<any>error);
        this.router.navigate(['/articles', {"errorMsg": "The article could not be updated"}]);
      }
    );
  }

}
