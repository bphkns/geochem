import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geochem-projects-list',
  templateUrl: './projects-list.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
    `,
  ],
})
export class ProjectsListComponent implements OnInit {
  ngOnInit(): void {}
}
