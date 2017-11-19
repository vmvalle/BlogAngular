import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'articles-list',
  templateUrl: '../views/articles-list.html'
})
export class ArticlesListComponent {

  public title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
      this.title = 'Lista de artículos'
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ArticlesListComponent');
  }
}
