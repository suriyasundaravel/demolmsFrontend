import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupLeavedetailsPageRoutingModule } from './sup-leavedetails-routing.module';

import { SupLeavedetailsPage } from './sup-leavedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupLeavedetailsPageRoutingModule
  ],
  declarations: [SupLeavedetailsPage]
})
export class SupLeavedetailsPageModule {}
