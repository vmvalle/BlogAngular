import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// Components
import {HomeComponent} from "./components/home.component";
import {ArticlesListComponent} from "./components/articles-list.component";
import {ErrorComponent} from "./components/error.component";
import {ArticlesComponent} from "./components/article.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/add', component: ArticlesComponent},
  // Rutas que no existen, siempre debe ser la última declaración
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
