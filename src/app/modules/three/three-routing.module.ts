import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { PreFetchDataGuard } from './guards/pre-fetch-data.guard';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    resolve: { data$: PreFetchDataGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeRoutingModule {}
