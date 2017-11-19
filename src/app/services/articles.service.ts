import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Article} from "../models/article";
import {GLOBAL} from "./global";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ArticlesService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url + '/article';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ArticlesService');
  }

  getArticles(): Observable<any> {
    return this.http.get(this.url + '/list');
  }


}
