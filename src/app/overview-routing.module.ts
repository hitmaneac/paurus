import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CoursesComponent } from './overview/courses.component';
import { ProfessorsComponent } from './overview/professors.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'professors', component: ProfessorsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }