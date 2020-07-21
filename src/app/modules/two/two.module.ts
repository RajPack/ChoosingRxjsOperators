import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    TwoRoutingModule
  ]
})
export class TwoModule { }
