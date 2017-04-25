import { Component } from '@angular/core';

import {WorkList} from './working';
import {WorkingService} from '.working.service'

@Component({
  selector: 'my-app',
  template: `
      Hello ,
      <working-list></working-list>
  `

})
export class AppComponent {
  title = 'Working List';
  works: WorkList[];
  selectedWork: WorkList;

  constructor(private workingService: WorkingService) { }

  getworks(): void {
    this.WorkingService.getworks().then(works => this.works = works);
  }

  ngOnInit(): void {
    this.getworks();
  }

  onSelect(work: WorkList): void {
    this.selectedWork = work;
  }
}
