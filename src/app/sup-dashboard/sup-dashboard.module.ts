import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupDashboardPageRoutingModule } from './sup-dashboard-routing.module';

import { SupDashboardPage } from './sup-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupDashboardPageRoutingModule
  ],
  declarations: [SupDashboardPage]
})
export class SupDashboardPageModule {}
