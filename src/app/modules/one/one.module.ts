import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { SearchComponent } from './components/container/search/search.component';
import { DetailComponent } from './components/container/detail/detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ContainerComponent, SearchComponent, DetailComponent],
  imports: [
    CommonModule,
    OneRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ]
})
export class OneModule { }
