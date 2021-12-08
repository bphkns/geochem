import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[geochemPrimaryButton]',
})
export class PrimaryButtonDirective {
  @HostBinding('class')
  classes = ` bg-purple-600 hover:bg-purple-700 focus:ring-purple-700 focus:ring-offset-blue-200 text-white`;
}
