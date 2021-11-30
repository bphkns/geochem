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
import { GLOBAL_APP_STATE } from './state/global-state';
import { geochemHomeIcon } from './svg/home';
import { geochemKeyDownIcon } from './svg/key-down';
import { geochemLockIcon } from './svg/lock';
import { geochemManAvatarIcon } from './svg/man-avatar';
import { geochemProfileDetailsIcon } from './svg/profile-details';
import { geochemProfileUserIcon } from './svg/profile-user';
import { geochemProjectIcon } from './svg/project';
import { geochemTaskIcon } from './svg/task';
import { RxState } from '@rx-angular/state';
import { GlobalState } from '@geochem/api-interfaces';
import { geochemProjectDetailsIcon } from './svg/project-details';
import { geochemListIcon } from './svg/list';
import { geochemSettingsIcon } from './svg/settings';

const ICONS_LIST = [
  geochemHomeIcon,
  geochemProfileUserIcon,
  geochemProfileDetailsIcon,
  geochemLockIcon,
  geochemManAvatarIcon,
  geochemKeyDownIcon,
  geochemTaskIcon,
  geochemProjectIcon,
  geochemProjectDetailsIcon,
  geochemListIcon,
  geochemSettingsIcon,
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
      errorPath: '/login',
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
  providers: [
    {
      provide: GLOBAL_APP_STATE,
      useFactory: () => new RxState<GlobalState>(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
