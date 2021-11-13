import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './sidenav/sidenav.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  imports: [CommonModule],
  exports: [SidenavModule, ButtonModule],
})
export class UiModule {}
