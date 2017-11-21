import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticlesService} from "../services/articles.service";
import {Article} from "../models/article";

@Component({
  selector: 'article-add',
  templateUrl: '../views/article-add.html',
  providers: [ArticlesService]
})
export class ArticlesComponent {



}
