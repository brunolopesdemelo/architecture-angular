//core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
//app
import { AppComponent } from '../modules/app/app.component';
import { PageNotFoundComponent } from '../modules/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from '../modules/home/home.module';


@NgModule({
  imports: [ BrowserModule, HomeModule, AppRoutingModule ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(router: Router){}
}
