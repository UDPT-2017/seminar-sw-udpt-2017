"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var worklist_1 = require("./worklist");
var worklist_service_1 = require("./worklist.service");
require("rxjs/add/operator/switchMap");
var WorkingListComponent = (function () {
    function WorkingListComponent(worklistService, route, location) {
        this.worklistService = worklistService;
        this.route = route;
        this.location = location;
    }
    WorkingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.worklistService.getWorkList(+params['id']); })
            .subscribe(function (worklist) { return _this.worklist = worklist; });
    };
    WorkingListComponent.prototype.goBack = function () {
        this.location.back();
    };
    WorkingListComponent.prototype.save = function () {
        var _this = this;
        this.worklistService.update(this.worklist)
            .then(function () { return _this.goBack(); });
    };
    return WorkingListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", worklist_1.WorkList)
], WorkingListComponent.prototype, "worklist", void 0);
WorkingListComponent = __decorate([
    core_1.Component({
        selector: "working-list",
        templateUrl: './working-list.component.html'
    }),
    __metadata("design:paramtypes", [worklist_service_1.WorkListService,
        router_1.ActivatedRoute,
        common_1.Location])
], WorkingListComponent);
exports.WorkingListComponent = WorkingListComponent;
//<input type="text" [{ngModel}]="selectedItem">
// <button (click)="onDeleteItem()">Delete Item</button><br>
// <input type="text" #shoppingListItem>
// <button (click)="onAddItem(shoppingListItem)">Add Item</button>
//# sourceMappingURL=working-list.component.js.map