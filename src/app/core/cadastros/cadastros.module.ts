import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosComponent } from './cadastros.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';

@NgModule({
  declarations: [CadastrosComponent],
  imports: [CadastrosRoutingModule],
})
export class CadastrosModule {}
