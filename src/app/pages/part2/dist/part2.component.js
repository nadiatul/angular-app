"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Part2Component = /** @class */ (function () {
    function Part2Component() {
        this.diamonds = '';
        this.errorMessage = '';
    }
    Part2Component.prototype.onNumberIsChange = function (value) {
        this.diamonds = '';
        this.drawDiamond(value.target.value);
    };
    Part2Component.prototype.drawDiamond = function (num) {
        if (this.validatation(num)) {
            this.errorMessage = '';
            var initialSpace = '   '; // 3 length
            var numSize = num - 1;
            for (var i = 0; i < numSize; i++) {
                this.createDiamond(num, i, initialSpace);
            }
            for (var i = numSize; i >= 0; i--) {
                this.createDiamond(num, i, initialSpace);
            }
        }
    };
    Part2Component.prototype.addSpace = function (num, i) {
        var astrk = '';
        var lengthSpace = Math.round(num / 2) - i + 4;
        for (var j = 0; j <= lengthSpace; j++) {
            astrk += ' ';
        }
        return astrk;
    };
    Part2Component.prototype.createDiamond = function (num, i, initialSpace) {
        if (!(i % 2)) {
            var astrk = this.addSpace(num, i);
            for (var j = 0; j <= i; j++) {
                astrk += ' *';
            }
            console.log(initialSpace + astrk);
            this.diamonds += "<br>" + initialSpace + astrk;
        }
    };
    Part2Component.prototype.validatation = function (num) {
        var errorMessage = '';
        var isValid = true;
        console.log(num);
        num = parseInt(num);
        console.log(num);
        if (isNaN(num)) {
            errorMessage = 'Error: This input cannot be Not A Number';
            console.log(errorMessage);
            isValid = false;
        }
        if (!(num % 2) && !isNaN(num)) {
            errorMessage = 'Error: This input cannot be even number';
            console.log(errorMessage);
            isValid = false;
        }
        if (num < 0) {
            errorMessage = 'Error: This input cannot be a negative number';
            console.log(errorMessage);
            isValid = false;
        }
        this.errorMessage = errorMessage;
        return isValid;
    };
    Part2Component = __decorate([
        core_1.Component({
            selector: 'app-part2',
            templateUrl: './part2.component.html',
            styleUrls: ['./part2.component.scss']
        })
    ], Part2Component);
    return Part2Component;
}());
exports.Part2Component = Part2Component;

//# sourceMappingURL=part2.component.js.map
