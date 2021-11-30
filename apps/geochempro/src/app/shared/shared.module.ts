import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '@geochem/ui';
import { TippyModule } from '@ngneat/helipopper';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { HasRolePipe } from './auth/role.pipe';
import { ContainerComponent } from './components/container/container.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { ErrorNotFoundComponent } from './components/error/error-not-found/error-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/landing/login/login.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { NavLeftDirective } from './components/navbar/nav-left.directive';
import { NavRightDirective } from './components/navbar/nav-right.directive';
import { NavbarRightComponent } from './components/navbar/navbar-right/navbar-right.component';
import { ProfileComponent } from './components/navbar/navbar-right/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
@NgModule({
  declarations: [
    NavbarComponent,
    ContainerComponent,
    NavLeftDirective,
    NavRightDirective,
    LogoComponent,
    FooterComponent,
    ListComponent,
    ListItemComponent,
    SidenavListComponent,
    NavbarRightComponent,
    ProfileComponent,
    LoginComponent,
    ErrorNotFoundComponent,
    HasRolePipe,
    DashboardCardComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([]),
    SvgIconsModule.forChild([]),
    TippyModule,
  ],
  exports: [
    ReactiveFormsModule,
    UiModule,
    SvgIconsModule,
    /**
     * Components
     */
    NavbarComponent,
    ContainerComponent,
    NavLeftDirective,
    NavRightDirective,
    LogoComponent,
    FooterComponent,
    ListComponent,
    ListItemComponent,
    SidenavListComponent,
    NavbarRightComponent,
    ProfileComponent,
    LoginComponent,
    ErrorNotFoundComponent,
    HasRolePipe,
    DashboardCardComponent,
  ],
})
export class SharedModule {}
