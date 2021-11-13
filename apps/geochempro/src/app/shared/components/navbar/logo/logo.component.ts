import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'geochem-logo',
  templateUrl: './logo.component.html',
  styles: [],
  animations: [
    trigger('panelInOut', [
      transition('void => *', [
        style({ transform: 'translateX(-20%)' }),
        animate(300),
      ]),
      transition('* => void', [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class LogoComponent {
  @Input()
  imgURL!: string;

  @Input()
  showFullLogo = true;

  @Input()
  configurable = false;

  @Output()
  sideToggle = new EventEmitter();

  get logoURL(): string {
    if (!this.imgURL) {
      return '';
    }

    return this.location.prepareExternalUrl(this.imgURL);
  }

  constructor(private location: Location) {}

  toggle() {
    this.showFullLogo = !this.showFullLogo;
    this.sideToggle.emit();
  }
}
