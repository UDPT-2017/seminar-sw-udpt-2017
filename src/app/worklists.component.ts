import { Component,OnInit } from '@angular/core';
import { WorkingListComponent } from './working-list.component';

import { WorkList } from './worklist';
import { WorkListService } from './worklist.service';


@Component({
  selector: 'my-worklists',
  template: `
    <h2>My To-Do List</h2>
    <ul class="worklists">
      <li *ngFor="let worklist of worklists"
        [class.selected]="worklist === selectedItem"
        (click)="onSelect(worklist)">
        <span class="badge">{{worklist.stt}}</span> {{worklist.name}}
      </li>
    </ul>
    <working-list [worklist]="selectedItem"></working-list>
  `

})
export class WorkListsComponent implements OnInit  { 

worklists: WorkList[];
selectedItem: WorkList;

constructor(private worklistService: WorkListService) { }

// worklists = workingListItems;
 ngOnInit(): void {
 	this.worklistService.getWorkLists().then(worklists => this.worklists = worklists);
    
  }
 onSelect(worklist: WorkList): void {
  this.selectedItem = worklist;
}



 }
