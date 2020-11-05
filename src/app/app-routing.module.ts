import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: 'overview', loadChildren: () => import('./overview.module').then(m => m.OverviewModule),
    canLoad: [AuthGuard],
    component: OverviewComponent,
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
