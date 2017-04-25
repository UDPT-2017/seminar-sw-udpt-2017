import { Component } from '@angular/core';
import {WorkList} from './working';


@Component({
  selector: "working-list",

  template: `
      <h2>My To-Do List!</h2>
<ul class="worklists">
  <li *ngFor="let worklist of worklists" (click)="onSelect(worklist)">
    <span class="badge">{{worklist.important}}</span> {{worklist.name}}
  </li>
</ul>
  <div *ngIf="selectedItem">
      <h2>{{selectedItem.name}} details!</h2>
<div><label>id: </label>{{selectedItem.important}}</div>
<div>
    <label>name: </label>
    <input [(ngModel)]="selectedItem.name" placeholder="name"/>
</div>
        <button (click)="onDeleteItem(selectedItem)">Đã Hoàn Thành</button><br>
     </div>



  `
})


//(this.worklist) {
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
