import { PushModule } from '@rx-angular/template';
import { ListBoxOptionDirective } from './list-box-option';
import { ReactiveFormsModule } from '@angular/forms';
import { TippyModule } from '@ngneat/helipopper';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';

import { ListBoxComponent } from './list-box';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollingModule,
    TippyModule,
    PushModule,
  ],
  exports: [ListBoxComponent, ListBoxOptionDirective],
  declarations: [ListBoxComponent, ListBoxOptionDirective],
  providers: [],
})
export class ListBoxModule {}
