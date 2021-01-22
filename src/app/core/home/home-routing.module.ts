//core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//app
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes)],
  exports: [ RouterModule ]
})

export class HomeRoutingModule {};
