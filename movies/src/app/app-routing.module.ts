import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetShowTimesComponent } from './get-show-times/get-show-times.component';

const routes: Routes = [
  { path: '', component: GetShowTimesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
