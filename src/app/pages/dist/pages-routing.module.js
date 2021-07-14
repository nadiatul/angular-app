"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_component_1 = require("./main/main.component");
var pages_component_1 = require("./pages.component");
var part1_component_1 = require("./part1/part1.component");
var part2_component_1 = require("./part2/part2.component");
var routes = [
    { path: '', component: pages_component_1.PagesComponent, children: [
            { path: '', component: main_component_1.MainComponent },
            { path: 'part1', component: part1_component_1.Part1Component },
            { path: 'part2', component: part2_component_1.Part2Component }
        ] }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;

//# sourceMappingURL=pages-routing.module.js.map
