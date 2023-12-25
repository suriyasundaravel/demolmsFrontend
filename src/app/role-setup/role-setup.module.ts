import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoleSetupPageRoutingModule } from './role-setup-routing.module';

import { RoleSetupPage } from './role-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoleSetupPageRoutingModule
  ],
  declarations: [RoleSetupPage]
})
export class RoleSetupPageModule {}
