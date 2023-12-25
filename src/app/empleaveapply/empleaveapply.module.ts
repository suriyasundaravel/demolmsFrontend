import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleaveapplyPageRoutingModule } from './empleaveapply-routing.module';

import { EmpleaveapplyPage } from './empleaveapply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleaveapplyPageRoutingModule
  ],
  declarations: [EmpleaveapplyPage]
})
export class EmpleaveapplyPageModule {}
