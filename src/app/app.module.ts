//core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

//app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './core/home/home.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

@NgModule({
  imports: [ BrowserModule, HomeModule, AppRoutingModule ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(router: Router){}
}
