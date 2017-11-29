import {Component} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
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
  public errorMsg: string;
  public successMsg: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ){
      this.title = 'Lista de artículos'
      this.errorMsg = null;
      this.successMsg = null;
  }

  ngOnInit() {
    this.getArticlesList();
    this.checkMessages();
    console.log('Se ha cargado el componente ArticlesListComponent');

  }

  getArticlesList() {
    this.articlesService.getArticles().subscribe(
      result => {
        console.log(result);
        this.articles = result;
      },
      error => {
        console.log(<any>error);
        alert('Se ha producido un error.');
      }
    );
  }

  onDeleteArticle(id) {
      this.articlesService.deleteArticle(id).subscribe(
        result => {
          console.log(result);
          this.getArticlesList();
        },
        error => {
          console.log(<any>error);
          alert('Se ha producido un error.');
        }
      );
  }

  checkMessages() {
    this.route.params.forEach( (params: Params) => {
      this.errorMsg = params['errorMsg'];
      this.successMsg = params['successMsg'];
    });
  }
}
