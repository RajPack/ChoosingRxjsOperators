import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'one'},
  {path: 'one', loadChildren: () => import('./modules/one/one.module').then(m => m.OneModule)},
  {path: 'two', loadChildren: () => import('./modules/two/two.module').then(m => m.TwoModule)},
  {path: 'three', loadChildren: () => import('./modules/three/three.module').then(m => m.ThreeModule)},
  {path: 'four', loadChildren: () => import('./modules/four/four.module').then(m => m.FourModule)},
  {path: 'five', loadChildren: () => import('./modules/five/five.module').then(m => m.FiveModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
