import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SidebarDirective } from './sidebar.directive';
import { NavContentDirective } from './nav-content.directive';



@NgModule({
  declarations: [
    SidenavComponent,
    SidebarDirective,
    NavContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavComponent,
    SidebarDirective,
    NavContentDirective
  ]
})
export class SidenavModule { }
