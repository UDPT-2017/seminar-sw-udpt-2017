import { Component } from '@angular/core';

@Component({
  selector: "working-list",
  template: '
      <ul>
        <li *ngFor="#workingListItems of workingListItems" (click)="onItemClicked(workingListItems)">({workingListItems})</li>
      </ul>
  '
})
export class WorkingListComponent{
  public workingListItems = ["UDPT", "DHUD", "CDHTTT"];
  public selectedItem;

  onItemClicked(workingListItems){
    this.selectedItem = workingListItems
  }
}
