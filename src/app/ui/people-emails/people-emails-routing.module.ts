import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleEmailsComponent } from './people-emails.component';


const routes: Routes = [
  { path: 'level2', component: PeopleEmailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleEmailsRoutingModule { }