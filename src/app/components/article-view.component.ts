import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ArticlesService} from "../services/articles.service";
import {Article} from "../models/article";
import {Comment} from "../models/comment";

@Component({
  selector: 'article-view',
  templateUrl: '../views/article-view.html',
  providers: [ArticlesService]
})
export class ArticleViewComponent implements OnInit {
  public articulo: Article;
  public comment: Comment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) {
    this.articulo = new Article(null, '', '', null, '', null);
    this.comment = new Comment(null, null, null);
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ArticleViewComponent');
    this.getArticle();
  }

  getArticle() {
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

  addComment() {
    this.articlesService.addComment(this.articulo, this.comment).subscribe(
      result => {
        this.articulo = result as Article;
        this.comment = new Comment(null, null, null);
        this.router.navigate(['/articles', this.articulo.id]);
      },
      error => {
        console.log(<any>error);
        alert('Se ha producido un error.');
      }
    );
  }

}
