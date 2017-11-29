import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// Components
import {HomeComponent} from "./components/home.component";
import {ArticleAddComponent} from "./components/article-add.component";
import {ArticlesListComponent} from "./components/articles-list.component";
import {ErrorComponent} from "./components/error.component";
import {ArticleViewComponent} from "./components/article-view.component";
import {ArticleUpdateComponent} from "./components/article-update.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'articles/new', component: ArticleAddComponent},
  {path: 'articles/:id', component: ArticleViewComponent},
  {path: 'articles/update/:id', component: ArticleUpdateComponent},
  // Rutas que no existen, siempre debe ser la última declaración
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
