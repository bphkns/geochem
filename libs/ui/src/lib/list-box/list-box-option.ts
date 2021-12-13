import { Directive, TemplateRef } from '@angular/core';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[listBoxOption]' })
export class ListBoxOptionDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
