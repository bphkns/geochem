import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SettingsRoutingModule, AgGridModule, SharedModule],
})
export class SettingsModule {}
