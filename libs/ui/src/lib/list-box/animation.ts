import { animate, style, transition, trigger } from '@angular/animations';

export const panelInOut = trigger('panelInOut', [
  transition('void => *', [
    animate('500ms ease-in-out'),
    style({ opacity: '1' }),
  ]),
  transition('* => void', [
    animate('300ms ease-in-out'),
    style({ opacity: '0', transform: 'translateX(-50%)' }),
  ]),
]);
