"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Part1Component = /** @class */ (function () {
    function Part1Component(part1Service) {
        this.part1Service = part1Service;
        this.dropdownsAgeFilters = [
            { value: 'all', description: 'All' },
            { value: '20', description: '20 and Below' },
            { value: '21', description: '21 to 39' },
            { value: '40', description: '40 and above' },
        ];
    }
    Part1Component.prototype.ngOnInit = function () {
        this.getPart1Api();
    };
    Part1Component.prototype.getPart1Api = function () {
        var _this = this;
        this.part1Service.getDistrictManagerService().subscribe(function (res) {
            _this.managers = res;
            _this.initialManagers = res;
        }, function (err) { return console.error(err); });
    };
    Part1Component.prototype.filterByAge = function (value) {
        if (value) {
            switch (value) {
                case 'all':
                    this.managers = this.initialManagers;
                    break;
                case '20':
                    this.managers = this.initialManagers.filter(function (e) { return e.age <= 20; });
                    break;
                case '21':
                    this.managers = this.initialManagers.filter(function (e) { return e.age >= 21 && e.age <= 39; });
                    break;
                case '40':
                    this.managers = this.initialManagers.filter(function (e) { return e.age >= 40; });
                    break;
            }
        }
    };
    Part1Component.prototype.onChange = function (value) {
        this.filterByAge(value.target.value);
    };
    Part1Component = __decorate([
        core_1.Component({
            selector: 'app-part1',
            templateUrl: './part1.component.html',
            styleUrls: ['./part1.component.scss']
        })
    ], Part1Component);
    return Part1Component;
}());
exports.Part1Component = Part1Component;

//# sourceMappingURL=part1.component.js.map
