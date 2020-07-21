import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourRoutingModule } from './four-routing.module';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FourRoutingModule
  ]
})
export class FourModule { }
