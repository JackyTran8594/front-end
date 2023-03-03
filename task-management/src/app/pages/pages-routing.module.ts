import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
      },
      {
        path: 'permission',
        loadChildren: () =>
          import('./permission/permission.module').then((m) => m.PermissionModule),
      },
      {
        path: 'member',
        loadChildren: () =>
          import('./member/member.module').then((m) => m.MemberModule),
      },
      {
        path: 'roles-app',
        loadChildren: () =>
          import('./role/role-application/role-application.module').then(
            (m) => m.RoleApplicationModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./user/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then((m) => m.ReportModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }