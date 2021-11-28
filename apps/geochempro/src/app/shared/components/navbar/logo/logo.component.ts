import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { panelInOut } from '../../../animations/side-slide.animation';

@Component({
  selector: 'geochem-logo',
  templateUrl: './logo.component.html',
  styles: [],
  animations: [panelInOut],
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
