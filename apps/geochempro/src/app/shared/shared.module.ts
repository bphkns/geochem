import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavLeftDirective } from './components/navbar/nav-left.directive';
import { NavRightDirective } from './components/navbar/nav-right.directive';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { UiModule } from '@geochem/ui';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [CommonModule, UiModule, RouterModule.forChild([])],
  exports: [
    ReactiveFormsModule,
    UiModule,
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
  ],
})
export class SharedModule {}
