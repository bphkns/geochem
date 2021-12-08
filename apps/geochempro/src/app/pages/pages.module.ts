import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [PagesRoutingModule],
})
export class PagesModule {}
