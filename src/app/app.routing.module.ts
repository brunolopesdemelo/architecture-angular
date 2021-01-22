//core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//app
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{
    enableTracing: false,

  })],
  exports: [ RouterModule ]
})

export class AppRoutingModule{};
