import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsRouteModule } from './projects-route.module';

@NgModule({
  declarations: [ProjectsListComponent],
  imports: [CommonModule, ProjectsRouteModule],
})
export class ProjectsModule {}
