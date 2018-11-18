import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDupesComponent } from './people-dupes.component';


const routes: Routes = [
  { path: 'level3', component: PeopleDupesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleDupesRoutingModule { }