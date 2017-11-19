import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticlesService} from "../services/articles.service";
import {Article} from "../models/article";

@Component({
  selector: 'articles-list',
  templateUrl: '../views/articles-list.html',
  providers: [ArticlesService]
})
export class ArticlesListComponent {

  public title: string;
  public articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ){
      this.title = 'Lista de artículos'
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ArticlesListComponent');

    this.articlesService.getArticles().subscribe(
      result => {
        console.log(result);
        this.articles = result;
      },
      error => {
        console.log(<any>error)
      }
    );
  }
}
