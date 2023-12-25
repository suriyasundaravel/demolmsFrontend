import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupLeavedetailsPage } from './sup-leavedetails.page';

const routes: Routes = [
  {
    path: '',
    component: SupLeavedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupLeavedetailsPageRoutingModule {}
