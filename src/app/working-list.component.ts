import { Component } from '@angular/core';


export class WorkList {
  constructor(
   public important: string,
   public name: string
  ) {  }
  
}
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

export class WorkingListComponent{
   importants = ["1","2","3","4","5"];
   workingListItems: WorkList[] = [
  {important:"1", name:"an sang"},
  {important:"2", name:"an trua"},
  {important:"3", name:"an toi"},
   {important:"4", name:"chọn cv"},
    {important:"5", name:"chọn cv"},
     {important:"6", name:"chọn cv"},
      {important:"7", name:"chọn cv"},
       {important:"8", name:"chọn cv"},
        {important:"9", name:"chọn cv"},
         {important:"10", name:"chọn cv"},

  ];
  selectedItem: WorkList;
   worklists = this.workingListItems;
  onSelect(worklist: WorkList): void {
  this.selectedItem = worklist;
}
  onDeleteItem(selectedItem: WorkList) {
      this.workingListItems.splice(this.workingListItems.indexOf(selectedItem), 1);
    }
(this.worklist) {
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