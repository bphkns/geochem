import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import {
  popperVariation,
  TippyModule,
  tooltipVariation,
} from '@ngneat/helipopper';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { LetModule } from '@rx-angular/template';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { geochemHomeIcon } from './svg/home';
import { geochemLockIcon } from './svg/lock';
import { geochemManAvatarIcon } from './svg/man-avatar';
import { geochemProfileDetailsIcon } from './svg/profile-details';
import { geochemProfileUserIcon } from './svg/profile-user';

const ICONS_LIST = [
  geochemHomeIcon,
  geochemProfileUserIcon,
  geochemProfileDetailsIcon,
  geochemLockIcon,
  geochemManAvatarIcon,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SvgIconsModule.forRoot({
      icons: ICONS_LIST,
      sizes: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        xxl: '32px',
      },
      defaultSize: 'md',
    }),
    AuthModule.forRoot({
      ...environment.auth,
    }),
    LetModule,
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
        menu: {
          ...popperVariation,
          appendTo: 'parent',
          arrow: true,
          offset: [0, 10],
          animation: 'scale',
          interactive: true,
        },
      },
    }),
    /**Custom Modules*/
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
