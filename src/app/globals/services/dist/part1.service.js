"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Part1Service = /** @class */ (function () {
    function Part1Service(http) {
        this.http = http;
    }
    Part1Service.prototype.getDistrictManagerService = function () {
        return this.http.get('http://www.mocky.io/v2/5d73bf3d3300003733081869');
    };
    Part1Service = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], Part1Service);
    return Part1Service;
}());
exports.Part1Service = Part1Service;

//# sourceMappingURL=part1.service.js.map
