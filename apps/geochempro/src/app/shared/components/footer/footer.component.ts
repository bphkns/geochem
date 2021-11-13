import { Component, Input } from '@angular/core';

@Component({
  selector: 'geochem-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  @Input()
  date!: Date;

  @Input()
  text!: string;
}
