"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pages_routing_module_1 = require("./pages-routing.module");
var pages_component_1 = require("./pages.component");
var part1_component_1 = require("./part1/part1.component");
var part2_component_1 = require("./part2/part2.component");
var main_component_1 = require("./main/main.component");
var forms_1 = require("@angular/forms");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [
                pages_component_1.PagesComponent,
                part1_component_1.Part1Component,
                part2_component_1.Part2Component,
                main_component_1.MainComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                pages_routing_module_1.PagesRoutingModule
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;

//# sourceMappingURL=pages.module.js.map
