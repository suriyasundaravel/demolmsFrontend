import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupLeavehistoryPageRoutingModule } from './sup-leavehistory-routing.module';

import { SupLeavehistoryPage } from './sup-leavehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupLeavehistoryPageRoutingModule
  ],
  declarations: [SupLeavehistoryPage]
})
export class SupLeavehistoryPageModule {}
