import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrantsReportsComponent } from './components/registrants-reports/registrants-reports.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'registrants_reports'},
  { path: 'dashboard', component: DashComponent },
  { path: 'registrants_reports', component: RegistrantsReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
