import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';

const routes: Routes = [  
  { path: '', redirectTo: '/dashborad', pathMatch: 'full' },
  { path: 'dashborad', component: DashboardComponent },  
  { path: '**', component: DashboardComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
