import { Component,OnInit } from '@angular/core';
import { WorkingListComponent } from './working-list.component';
import { Router }   from '@angular/router';

import { WorkList } from './worklist';
import { WorkListService } from './worklist.service';


@Component({
  selector: 'my-worklists',
  templateUrl:'./worklists.component.html',
  styleUrls: [ './worklists.component.css' ]
})
export class WorkListsComponent implements OnInit  { 

worklists: WorkList[];
selectedItem: WorkList;

constructor(
  private worklistService: WorkListService,
  private router: Router
  ) { }

// worklists = workingListItems;
 ngOnInit(): void {
 	this.worklistService.getWorkLists().then(worklists => this.worklists = worklists);
    
  }
 onSelect(worklist: WorkList): void {
  this.selectedItem = worklist;
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedItem.stt]);
}

 }
