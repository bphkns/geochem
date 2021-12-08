import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsRouteModule } from './projects-route.module';

@NgModule({
  declarations: [ProjectsListComponent],
  imports: [CommonModule, ProjectsRouteModule, SharedModule],
})
export class ProjectsModule {}
