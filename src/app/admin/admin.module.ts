import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AccountusPageModule } from '../pages/accountus/accountus.module';
import { IonicModule } from '@ionic/angular';
import { MapsPageModule } from '../pages/maps/maps.module';
import { WeathersPageModule } from '../pages/weathers/weathers.module';
import { AddCrimePageModule } from '../pages/add-crime/add-crime.module';
import { AddCrimesPageModule } from '../pages/add-crimes/add-crimes.module';
import { CrimeDetailPageModule } from '../pages/crime-detail/crime-detail.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AdminRoutingModule,
    AccountusPageModule,
    MapsPageModule,
    WeathersPageModule,
    AddCrimePageModule,
    AddCrimesPageModule,
    CrimeDetailPageModule,
  ],  
  declarations: [AdminComponent]
})
export class AdminModule { }
