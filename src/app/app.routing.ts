import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// Components
import {HomeComponent} from "./components/home.component";
import {ArticleComponent} from "./components/article.component";
import {ArticlesListComponent} from "./components/articles-list.component";
import {ErrorComponent} from "./components/error.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'articles/new', component: ArticleComponent},
  // Rutas que no existen, siempre debe ser la última declaración
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
