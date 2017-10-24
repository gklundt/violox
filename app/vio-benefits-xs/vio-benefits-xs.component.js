"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_service_1 = require("../modal.service");
var VioBenefitsXsComponent = (function () {
    function VioBenefitsXsComponent(x) {
        this.x = x;
        this._modal = x.getSmallModal();
    }
    VioBenefitsXsComponent.prototype.openModal = function () {
        return this._modal.showModal();
    };
    VioBenefitsXsComponent = __decorate([
        core_1.Component({
            selector: "vio-benefits-xs",
            templateUrl: "./app/vio-benefits-xs/vio-benefits-xs.component.html",
            styleUrls: ["./app/vio-benefits-xs/vio-benefits-xs.component.css"]
        }),
        __param(0, core_1.Inject(modal_service_1.ModalService))
    ], VioBenefitsXsComponent);
    return VioBenefitsXsComponent;
}());
exports.VioBenefitsXsComponent = VioBenefitsXsComponent;
//# sourceMappingURL=vio-benefits-xs.component.js.map