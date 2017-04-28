"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var worklists = [
            { id: 1, name: "111111111111111" },
            { id: 2, name: "222222222" },
            { id: 3, name: "333333333" },
            { id: 4, name: "444444444" },
            { id: 5, name: "555555555" },
            { id: 6, name: "666666666" },
            { id: 7, name: "777777777" }
        ];
        return { worklists: worklists };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map