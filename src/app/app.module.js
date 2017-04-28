"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var working_list_component_1 = require("./working-list.component");
var worklists_component_1 = require("./worklists.component");
var worklist_service_1 = require("./worklist.service");
var importants_component_1 = require("./importants.component");
var work_search_component_1 = require("./work-search.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'worklists',
                    component: worklists_component_1.WorkListsComponent
                },
                {
                    path: 'imps',
                    component: importants_component_1.ImpComponent
                },
                {
                    path: '',
                    redirectTo: '/imps',
                    pathMatch: 'full'
                },
                {
                    path: 'detail/:id',
                    component: working_list_component_1.WorkingListComponent
                },
            ])
        ],
        declarations: [app_component_1.AppComponent, working_list_component_1.WorkingListComponent, worklists_component_1.WorkListsComponent, importants_component_1.ImpComponent, work_search_component_1.WorkSearchComponent],
        providers: [worklist_service_1.WorkListService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map