import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Article} from "../models/article";
import {Comment} from "../models/comment";
import {GLOBAL} from "./global";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ArticlesService {
  public url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = GLOBAL.url + '/article';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ArticlesService');
  }

  getArticles(): Observable<any> {
    return this.httpClient.get(this.url + '/list');
  }

  getArticle(id: string) {
    return this.httpClient.get(this.url + '/show/' + id);
  }

  addArticle(articulo: Article) {
    let body = JSON.stringify(articulo);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.url + '/add', body, {headers});
  }

  deleteArticle(id: string) {
    return this.httpClient.delete(this.url + '/delete/' + id);
  }

  updateArticle(article: Article) {
    return this.httpClient.put(this.url + '/update/' + article.id, article);
  }

  addComment(articulo: Article, comment: Comment) {
    return this.httpClient.put(this.url + '/' + articulo.id + '/comments/add', comment);
  }
}
