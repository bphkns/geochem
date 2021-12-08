import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertCloseDirective } from './alert-close.directive';

@NgModule({
  declarations: [AlertComponent, AlertCloseDirective],
  imports: [CommonModule],
  exports: [AlertComponent, AlertCloseDirective],
})
export class AlertModule {}
