import { ButtonLoaderIconDirective } from './button-directive';
import {
  Attribute,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[geochemButton]',
  template: `
    <div class="flex items-center ">
      <div *ngIf="loading">
        <ng-container *ngTemplateOutlet="icon?.tpl || defaultLoader">
        </ng-container>
      </div>
      <ng-container *ngIf="!loading"> <ng-content> </ng-content> </ng-container>
    </div>
    <ng-template #defaultLoader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </ng-template>
  `,
  animations: [],
})
export class ButtonComponent {
  @HostBinding('attr.aria-disabled')
  @HostBinding('disabled')
  @HostBinding('class.cursor-not-allowed')
  @HostBinding('class.opacity-70')
  @Input()
  loading = false;

  @ContentChild(ButtonLoaderIconDirective)
  icon!: ButtonLoaderIconDirective;

  @HostBinding('class')
  get classes(): string {
    const variant = this.variant || 'primary';
    return this.classMap[variant];
  }

  classMap = {
    primary: `rounded flex items-center px-3 py-1.5 min-w-max overflow-hidden transition ease-in duration-200 shadow relative bg-purple-600 text-white hover:bg-opacity-90  text-sm `,
    secondary: `rounded flex items-center px-3 py-1.5 min-w-max overflow-hidden  transition ease-in duration-200 shadow relative bg-gray-600 text-white hover:bg-opacity-90  text-sm `,
    outline: `rounded flex items-center px-3 py-1.5 min-w-max overflow-hidden shadow relative  transition ease-in duration-200   hover:bg-purple-600 hover:text-white border border-purple-900 focus:outline-none text-sm `,
  };

  constructor(
    @Attribute('variant')
    private variant: 'primary' | 'secondary' | 'outline',
    private renderer: Renderer2,
    private elemRef: ElementRef
  ) {}

  @HostListener('click', ['$event'])
  clicked(event: MouseEvent) {
    console.log(this.loading);
    if (this.loading) {
      return;
    }
    const btn = this.elemRef.nativeElement as HTMLButtonElement;

    const circle = this.renderer.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    const ripple = btn.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  }
}
