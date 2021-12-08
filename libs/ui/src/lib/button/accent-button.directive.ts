import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[geochemAccentButton]',
})
export class AccentButtonDirective {
  @HostBinding('class')
  classes = `text-purple-500 hover:bg-gray-100 focus:ring-purple-700 focus:ring-offset-purple-200`;
}
