import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'supervisor',
    loadChildren: () => import('./supervisor/supervisor.module').then( m => m.SupervisorPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'emp-dashboard',
    loadChildren: () => import('./emp-dashboard/emp-dashboard.module').then( m => m.EmpDashboardPageModule)
  },
  {
    path: 'sup-dashboard',
    loadChildren: () => import('./sup-dashboard/sup-dashboard.module').then( m => m.SupDashboardPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'planned-leave',
    loadChildren: () => import('./planned-leave/planned-leave.module').then( m => m.PlannedLeavePageModule)
  },
  {
    path: 'role-setup/:sdate/:edate',
    loadChildren: () => import('./role-setup/role-setup.module').then( m => m.RoleSetupPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'eol',
    loadChildren: () => import('./eol/eol.module').then( m => m.EOLPageModule)
  },
  {
    path: 'approve/:leaveId/:userId/:orgId',
    loadChildren: () => import('./approve/approve.module').then( m => m.ApprovePageModule)
  },
  {
    path: 'leave-application',
    loadChildren: () => import('./leave-application/leave-application.module').then( m => m.LeaveApplicationPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'holidays',
    loadChildren: () => import('./holidays/holidays.module').then( m => m.HolidaysPageModule)
  },
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then( m => m.ExamplePageModule)
  },
  {
    path: 'permission-apply',
    loadChildren: () => import('./permission-apply/permission-apply.module').then( m => m.PermissionApplyPageModule)
  },
  {
    path: 'apply-leave',
    loadChildren: () => import('./apply-leave/apply-leave.module').then( m => m.ApplyLeavePageModule)
  },
  {
    path: 'leave-details/:leaveId',
    loadChildren: () => import('./leave-details/leave-details.module').then( m => m.LeaveDetailsPageModule)
  },
  {
    path: 'plan-details/:leaveId',
    loadChildren: () => import('./plan-details/plan-details.module').then( m => m.PlanDetailsPageModule)
  },
  {path:'leave-history',
  loadChildren: () => import('./leave-history/leave-history.module').then( m => m.LeaveHistoryPageModule)
  },
  {path:'plan-history',
  loadChildren: () => import('./plan-history/plan-history.module').then( m => m.PlanHistoryPageModule)
  },
  {
    path: 'empleaveapply',
    loadChildren: () => import('./empleaveapply/empleaveapply.module').then(m => m.EmpleaveapplyPageModule)
  },
  {
    path: 'sup-leavehistory',
    loadChildren: () => import('./sup-leavehistory/sup-leavehistory.module').then( m => m.SupLeavehistoryPageModule)
  },
  {
    path: 'sup-leavedetails/:leaveId',
    loadChildren: () => import('./sup-leavedetails/sup-leavedetails.module').then( m => m.SupLeavedetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
