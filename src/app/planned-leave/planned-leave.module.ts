import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlannedLeavePageRoutingModule } from './planned-leave-routing.module';

import { PlannedLeavePage } from './planned-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlannedLeavePageRoutingModule
  ],
  declarations: [PlannedLeavePage]
})
export class PlannedLeavePageModule {}
