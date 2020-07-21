import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveRoutingModule } from './five-routing.module';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FiveRoutingModule
  ]
})
export class FiveModule { }
