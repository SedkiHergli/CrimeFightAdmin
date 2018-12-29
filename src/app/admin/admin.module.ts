import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AccountusPageModule } from '../pages/accountus/accountus.module';
import { IonicModule } from '@ionic/angular';
import { MapsPageModule } from '../pages/maps/maps.module';
import { WeathersPageModule } from '../pages/weathers/weathers.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AdminRoutingModule,
    AccountusPageModule,
    MapsPageModule,
    WeathersPageModule
  ],  
  declarations: [AdminComponent]
})
export class AdminModule { }
