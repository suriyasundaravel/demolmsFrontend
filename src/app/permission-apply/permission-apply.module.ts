import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermissionApplyPageRoutingModule } from './permission-apply-routing.module';

import { PermissionApplyPage } from './permission-apply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermissionApplyPageRoutingModule
  ],
  declarations: [PermissionApplyPage]
})
export class PermissionApplyPageModule {}
