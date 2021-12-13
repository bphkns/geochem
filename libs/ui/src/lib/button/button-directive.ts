import { Directive, TemplateRef } from '@angular/core';
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[buttonLoader]',
})
export class ButtonLoaderIconDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
