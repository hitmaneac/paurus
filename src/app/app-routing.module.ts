import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview';
import { CoursesComponent } from './overview/courses.component';
import { ProfessorsComponent } from './overview/professors.component';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: 'overview', loadChildren: () => import('./overview.module').then(m => m.OverviewModule),
    canLoad: [AuthGuard],
    component: OverviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses', loadChildren: () => import('./overview.module').then(m => m.OverviewModule),
    canLoad: [AuthGuard],
    component: CoursesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'professors', loadChildren: () => import('./overview.module').then(m => m.OverviewModule),
    canLoad: [AuthGuard],
    component: ProfessorsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
