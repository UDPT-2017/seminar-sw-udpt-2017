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
var worklist_service_1 = require("./worklist.service");
var WorkListsComponent = (function () {
    function WorkListsComponent(worklistService, router) {
        this.worklistService = worklistService;
        this.router = router;
    }
    // worklists = workingListItems;
    WorkListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.worklistService.getWorkLists().then(function (worklists) { return _this.worklists = worklists; });
    };
    WorkListsComponent.prototype.onSelect = function (worklist) {
        this.selectedItem = worklist;
    };
    WorkListsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedItem.stt]);
    };
    return WorkListsComponent;
}());
WorkListsComponent = __decorate([
    core_1.Component({
        selector: 'my-worklists',
        templateUrl: './worklists.component.html',
        styleUrls: ['./worklists.component.css']
    }),
    __metadata("design:paramtypes", [worklist_service_1.WorkListService,
        router_1.Router])
], WorkListsComponent);
exports.WorkListsComponent = WorkListsComponent;
//# sourceMappingURL=worklists.component.js.map