import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccentButtonDirective } from './accent-button.directive';
import { ButtonDirective } from './button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { PrimaryButtonDirective } from './primary-button.directive';
import { WarnButtonDirective } from './warn-button.directive';

@NgModule({
  declarations: [
    ButtonDirective,
    PrimaryButtonDirective,
    AccentButtonDirective,
    WarnButtonDirective,
    IconButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonDirective,
    PrimaryButtonDirective,
    AccentButtonDirective,
    WarnButtonDirective,
    IconButtonComponent,
  ],
})
export class ButtonModule {}
