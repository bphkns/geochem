import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { AlertModule } from './alert/alert.module';
import { ListBoxModule } from './list-box';

@NgModule({
  imports: [CommonModule],
  exports: [SidenavModule, ButtonModule, AlertModule, ListBoxModule],
})
export class UiModule {}
