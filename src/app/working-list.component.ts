import { Component, Input } from '@angular/core';


import { WorkList } from './worklist';

 
@Component({
  selector: "working-list",  
 
  template: `
    <div *ngIf="worklist">
      <h2>{{worklist.name}} details!</h2>
      <div><label>stt: </label>{{worklist.stt}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="worklist.name" placeholder="name"/>
      </div>
    </div>
 
  `
})

export class WorkingListComponent{
  @Input() worklist: WorkList;

  
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