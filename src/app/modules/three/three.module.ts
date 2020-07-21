import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ThreeRoutingModule
  ]
})
export class ThreeModule { }
