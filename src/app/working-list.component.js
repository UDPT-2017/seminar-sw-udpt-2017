"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var WorkList = (function () {
    function WorkList(important, name) {
        this.important = important;
        this.name = name;
    }
    return WorkList;
}());
exports.WorkList = WorkList;
var WorkingListComponent = (function () {
    function WorkingListComponent() {
        this.importants = ["1", "2", "3", "4", "5"];
        this.workingListItems = [
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
        this.worklists = this.workingListItems;
    }
    WorkingListComponent.prototype.onSelect = function (worklist) {
        this.selectedItem = worklist;
    };
    WorkingListComponent.prototype.onDeleteItem = function (selectedItem) {
        this.workingListItems.splice(this.workingListItems.indexOf(selectedItem), 1);
    };
    return WorkingListComponent;
}());
WorkingListComponent = __decorate([
    core_1.Component({
        selector: "working-list",
        template: "\n      <h2>My To-Do List!</h2>\n<ul class=\"worklists\">\n  <li *ngFor=\"let worklist of worklists\" (click)=\"onSelect(worklist)\">\n    <span class=\"badge\">{{worklist.important}}</span> {{worklist.name}}\n  </li>\n</ul>\n  <div *ngIf=\"selectedItem\">\n      <h2>{{selectedItem.name}} details!</h2>\n<div><label>id: </label>{{selectedItem.important}}</div>\n<div>\n    <label>name: </label>\n    <input [(ngModel)]=\"selectedItem.name\" placeholder=\"name\"/>\n</div>\n        <button (click)=\"onDeleteItem(selectedItem)\">\u0110\u00E3 Ho\u00E0n Th\u00E0nh</button><br>\n     </div>\n\n\n \n  "
    })
], WorkingListComponent);
exports.WorkingListComponent = WorkingListComponent;
(this.worklist);
{
}
//<input type="text" [{ngModel}]="selectedItem">
// <button (click)="onDeleteItem()">Delete Item</button><br>
// <input type="text" #shoppingListItem>
// <button (click)="onAddItem(shoppingListItem)">Add Item</button> 
//# sourceMappingURL=working-list.component.js.map