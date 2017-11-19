import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// Routes
import {routing, appRoutingProviders} from "./app.routing";

// Components
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import {ArticlesListComponent} from "./components/articles-list.component";
import {ErrorComponent} from "./components/error.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
