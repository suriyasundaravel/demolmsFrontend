import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanHistoryPage } from './plan-history.page';

const routes: Routes = [
  {
    path: '',
    component: PlanHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanHistoryPageRoutingModule {}
