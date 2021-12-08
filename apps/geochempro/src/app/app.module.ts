import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { GlobalState } from '@geochem/api-interfaces';
import { TabsModule } from '@geochem/ui';
import { DialogModule } from '@ngneat/dialog';
import {
  popperVariation,
  TippyModule,
  tooltipVariation,
} from '@ngneat/helipopper';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { RxState } from '@rx-angular/state';
import { LetModule } from '@rx-angular/template';
import { HotToastModule } from '@ngneat/hot-toast';
// import 'ag-grid-enterprise';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GLOBAL_APP_STATE } from './state/global-state';
import { geochemAddUserIcon } from './svg/add-user';
import { geochemHomeIcon } from './svg/home';
import { geochemKeyDownIcon } from './svg/key-down';
import { geochemListIcon } from './svg/list';
import { geochemLockIcon } from './svg/lock';
import { geochemManAvatarIcon } from './svg/man-avatar';
import { geochemProfileDetailsIcon } from './svg/profile-details';
import { geochemProfileUserIcon } from './svg/profile-user';
import { geochemProjectIcon } from './svg/project';
import { geochemProjectDetailsIcon } from './svg/project-details';
import { geochemSettingsIcon } from './svg/settings';
import { geochemTaskIcon } from './svg/task';
import { geochemUserRoleIcon } from './svg/user-role';
import { geochemUsersIcon } from './svg/users';
import { geochemRefreshIcon } from './svg/refresh';

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
  geochemUsersIcon,
  geochemUserRoleIcon,
  geochemAddUserIcon,
  geochemRefreshIcon,
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
      httpInterceptor: {
        allowedList: [`${environment.apiUrl}/*`],
      },
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

    TabsModule.forRoot(),
    DialogModule.forRoot({}),
    HotToastModule.forRoot(),
    /**Custom Modules*/
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: GLOBAL_APP_STATE,
      useFactory: () => new RxState<GlobalState>(),
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
