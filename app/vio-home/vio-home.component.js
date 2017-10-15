"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var VioHomeComponent = (function () {
    function VioHomeComponent() {
    }
    VioHomeComponent.prototype.scrollFunction = function () {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("to-top").style.display = "block";
        }
        else {
            document.getElementById("to-top").style.display = "none";
        }
    };
    VioHomeComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    VioHomeComponent.prototype.onWindowScroll = function () {
        this.scrollFunction();
    };
    __decorate([
        core_1.HostListener("window:scroll", [])
    ], VioHomeComponent.prototype, "onWindowScroll", null);
    VioHomeComponent = __decorate([
        core_2.Component({
            selector: "vio-home",
            templateUrl: "./app/vio-home/vio-home.component.html",
            styleUrls: ["./app/vio-home/vio-home.component.css"]
        })
    ], VioHomeComponent);
    return VioHomeComponent;
}());
exports.VioHomeComponent = VioHomeComponent;
//# sourceMappingURL=vio-home.component.js.map