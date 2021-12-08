import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoleGuard } from '../shared/auth/role.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

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
      roles: ['*'],
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
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
