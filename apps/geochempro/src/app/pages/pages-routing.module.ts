import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoleGuard } from '../shared/auth/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
    data: {
      roles: ['org-admin'],
    },
    canActivate: [AuthRoleGuard],
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((mod) => mod.ProjectsModule),
    data: {
      roles: [`org-admin`],
    },
    canActivate: [AuthRoleGuard],
  },
  {
    path: `settings`,
    loadChildren: () =>
      import('./settings/settings.module').then((mod) => mod.SettingsModule),
    data: {
      roles: [`org-admin`],
    },
    canActivate: [AuthRoleGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
