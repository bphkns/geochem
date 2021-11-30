import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRedirectGuard } from './shared/auth/auth-redirect.guard';
import { ErrorNotFoundComponent } from './shared/components/error/error-not-found/error-not-found.component';
import { LoginComponent } from './shared/components/landing/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages',
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canLoad: [AuthRedirectGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
