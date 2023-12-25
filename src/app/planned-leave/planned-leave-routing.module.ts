import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlannedLeavePage } from './planned-leave.page';

const routes: Routes = [
  {
    path: '',
    component: PlannedLeavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannedLeavePageRoutingModule {}
