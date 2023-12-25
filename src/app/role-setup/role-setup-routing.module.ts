import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleSetupPage } from './role-setup.page';

const routes: Routes = [
  {
    path: '',
    component: RoleSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleSetupPageRoutingModule {}
