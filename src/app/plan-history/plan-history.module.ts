import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanHistoryPageRoutingModule } from './plan-history-routing.module';

import { PlanHistoryPage } from './plan-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanHistoryPageRoutingModule
  ],
  declarations: [PlanHistoryPage]
})
export class PlanHistoryPageModule {}
