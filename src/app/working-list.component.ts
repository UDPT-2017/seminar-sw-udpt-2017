import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';




import { WorkList } from './worklist';
import { WorkListService } from './worklist.service';
 import 'rxjs/add/operator/switchMap';


@Component({
  selector: "working-list",  
 
  templateUrl:'./working-list.component.html'
})

export class WorkingListComponent implements OnInit{
    @Input() worklist: WorkList;
   constructor(
  private worklistService: WorkListService,
  private route: ActivatedRoute,
  private location: Location
) {}
   ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.worklistService.getWorkList(+params['stt']))
    .subscribe(worklist => this.worklist = worklist);
  }
  goBack(): void {
  this.location.back();
}


  
  //onDeleteItem(selectedItem: WorkList) {
      //this.workingListItems.splice(this.workingListItems.indexOf(selectedItem), 1);
   // }
     
      //  this.selectedItem = workingListItem;
    //}

  //   onAddItem(worklist : WorkList) {
    //    this.worklists.push({important: worklist.important,name: worklist.name});
  // }

   // onDeleteItem() {
   //     this.workingListItems.splice(this.workingListItems.indexOf(this.selectedItem), 1);
   // }
}
//<input type="text" [{ngModel}]="selectedItem">
     // <button (click)="onDeleteItem()">Delete Item</button><br>
     // <input type="text" #shoppingListItem>
     // <button (click)="onAddItem(shoppingListItem)">Add Item</button>
