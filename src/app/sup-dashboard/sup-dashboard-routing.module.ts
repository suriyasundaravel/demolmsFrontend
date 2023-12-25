import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupDashboardPage } from './sup-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SupDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupDashboardPageRoutingModule {}
