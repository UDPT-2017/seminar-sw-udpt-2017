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
var _working_service_1 = require(".working.service");
var AppComponent = (function () {
    function AppComponent(workingService) {
        this.workingService = workingService;
        this.title = 'Working List';
    }
    AppComponent.prototype.getworks = function () {
        var _this = this;
        this.WorkingService.getworks().then(function (works) { return _this.works = works; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getworks();
    };
    AppComponent.prototype.onSelect = function (work) {
        this.selectedWork = work;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      Hello ,\n      <working-list></working-list>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _working_service_1.WorkingService !== "undefined" && _working_service_1.WorkingService) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=app.component.js.map