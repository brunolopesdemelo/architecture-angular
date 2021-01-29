import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '',                                 loadChildren: () => import('./core/cadastros/cadastros.module').then((c) => c.CadastrosModule)},
  { path: 'home',                             loadChildren: () => import('./core/home/home.module').then((home) => home.HomeModule)},
  { path: 'cadastros',                        loadChildren: () => import('./core/cadastros/cadastros.module').then((cadastros) => cadastros.CadastrosModule)},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
