import {WorkList} from './working';
export class WorkingListComponent {
  importants = ["1", "2", "3", "4", "5"];
  workingListItems: WorkList[] = [
    { important: "1", name: "an sang" },
    { important: "2", name: "an trua" },
    { important: "3", name: "an toi" },
    { important: "4", name: "chọn cv" },
    { important: "5", name: "chọn cv" },
    { important: "6", name: "chọn cv" },
    { important: "7", name: "chọn cv" },
    { important: "8", name: "chọn cv" },
    { important: "9", name: "chọn cv" },
    { important: "10", name: "chọn cv" },

  ];
  selectedItem: WorkList;
  worklists = this.workingListItems;
  onSelect(worklist: WorkList): void {
    this.selectedItem = worklist;
  }
  onDeleteItem(selectedItem: WorkList) {
    this.workingListItems.splice(this.workingListItems.indexOf(selectedItem), 1);
  }
