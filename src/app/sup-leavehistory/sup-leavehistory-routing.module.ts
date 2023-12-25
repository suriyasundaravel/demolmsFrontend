import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupLeavehistoryPage } from './sup-leavehistory.page';

const routes: Routes = [
  {
    path: '',
    component: SupLeavehistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupLeavehistoryPageRoutingModule {}
