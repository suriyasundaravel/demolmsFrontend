import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovePageRoutingModule } from './approve-routing.module';

import { ApprovePage } from './approve.page';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovePageRoutingModule
  ],
  providers: [
    DatePipe, // Add DatePipe to the providers array
    // your other services or providers
  ],
  declarations: [ApprovePage]
})
export class ApprovePageModule {}
