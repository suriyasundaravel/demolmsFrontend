import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EOLPageRoutingModule } from './eol-routing.module';

import { EOLPage } from './eol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EOLPageRoutingModule
  ],
  declarations: [EOLPage]
})
export class EOLPageModule {}
