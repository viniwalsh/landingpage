import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaComponent } from './conta.component';


@NgModule({
  declarations: [ContaComponent],
  imports: [
    CommonModule
  ],
  exports: [ContaComponent]
})
export class ContaModule { }
