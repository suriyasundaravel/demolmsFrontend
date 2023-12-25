import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpDashboardPageRoutingModule } from './emp-dashboard-routing.module';

import { EmpDashboardPage } from './emp-dashboard.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    EmpDashboardPageRoutingModule,NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#E1DDBF",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
  ],
  declarations: [EmpDashboardPage]
})
export class EmpDashboardPageModule {}
