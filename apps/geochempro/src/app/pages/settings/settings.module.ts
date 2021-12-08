import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../../shared/shared.module';
import { PermissionsComponent } from './permissions/permissions.component';
import { RolesComponent } from './roles/roles.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    SettingsComponent,
    UserComponent,
    RolesComponent,
    PermissionsComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    AgGridModule.withComponents([]),
    SharedModule,
  ],
})
export class SettingsModule {}
