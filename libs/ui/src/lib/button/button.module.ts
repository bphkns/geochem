import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonLoaderIconDirective } from './button-directive';
import { ButtonComponent } from './button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    ButtonLoaderIconDirective,
  ],
  imports: [CommonModule],
  exports: [ButtonComponent, IconButtonComponent, ButtonLoaderIconDirective],
})
export class ButtonModule {}
