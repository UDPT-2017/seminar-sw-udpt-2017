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

worklists: WorkList[] ;
selectedItem: WorkList;

constructor(
  private worklistService: WorkListService,
  private router: Router
  ) { }
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.worklistService.create(name)
    .then(worklist => {
      this.worklists.push(worklist);
      this.selectedItem = null;
    });
}

delete(worklist: WorkList): void {
  this.worklistService
      .delete(worklist.id)
      .then(() => {
        this.worklists = this.worklists.filter(h => h !== worklist);
        if (this.selectedItem === worklist) { this.selectedItem = null; }
      });
}
// worklists = workingListItems;
 ngOnInit(): void {
 	this.worklistService.getWorkLists().then(worklists => this.worklists = worklists);
    
  }

 onSelect(worklist: WorkList): void {
  this.selectedItem = worklist;
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedItem.id]);
}



 }
