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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WorkListService = (function () {
    function WorkListService(http) {
        this.http = http;
        //getWorkLists(): Promise<WorkList[]>{
        //return Promise.resolve(workingListItems);
        //}
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.worklistsUrl = 'api/worklists'; // URL to web api
    }
    WorkListService.prototype.getWorkLists = function () {
        return this.http.get(this.worklistsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    WorkListService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    WorkListService.prototype.getWorkList = function (id) {
        var url = this.worklistsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    WorkListService.prototype.update = function (worklist) {
        var url = this.worklistsUrl + "/" + worklist.id;
        return this.http
            .put(url, JSON.stringify(worklist), { headers: this.headers })
            .toPromise()
            .then(function () { return worklist; })
            .catch(this.handleError);
    };
    WorkListService.prototype.create = function (name) {
        return this.http
            .post(this.worklistsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    WorkListService.prototype.delete = function (id) {
        var url = this.worklistsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return WorkListService;
}());
WorkListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WorkListService);
exports.WorkListService = WorkListService;
//# sourceMappingURL=worklist.service.js.map