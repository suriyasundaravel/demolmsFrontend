import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionApplyPage } from './permission-apply.page';

const routes: Routes = [
  {
    path: '',
    component: PermissionApplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionApplyPageRoutingModule {}
