import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AccountusPage } from '../pages/accountus/accountus.page';
import { MapsPage } from '../pages/maps/maps.page';
import { WeathersPage } from '../pages/weathers/weathers.page';
import { AuthGuardService } from './../services/auth-guard.service';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/(accountus:accountus)',
        pathMatch: 'full',
        canActivate: [AuthGuardService],
      },
      {
        path: 'accountus',
        outlet: 'accountus',
        component: AccountusPage,
        canActivate: [AuthGuardService],

      },
      {
        path: 'supervisors',
        outlet: 'supervisors',
        component: WeathersPage,
        canActivate: [AuthGuardService],

      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/(accountus:accountus)',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
