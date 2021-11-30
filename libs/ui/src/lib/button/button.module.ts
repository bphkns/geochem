import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { PrimaryButtonDirective } from './primary-button.directive';
import { AccentButtonDirective } from './accent-button.directive';
import { WarnButtonDirective } from './warn-button.directive';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PrimaryButtonDirective,
    AccentButtonDirective,
    WarnButtonDirective,
    IconButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    PrimaryButtonDirective,
    AccentButtonDirective,
    WarnButtonDirective,
    IconButtonComponent,
  ],
})
export class ButtonModule {}
