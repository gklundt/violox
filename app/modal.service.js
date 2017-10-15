"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vio_modal_request_xs_component_1 = require("./vio-modal-request-xs/vio-modal-request-xs.component");
var ModalService = (function () {
    function ModalService() {
        this._small = new vio_modal_request_xs_component_1.VioModalRequestXsComponent();
    }
    ModalService.prototype.ngOnInit = function () {
        this._small = new vio_modal_request_xs_component_1.VioModalRequestXsComponent();
    };
    ModalService.prototype.getSmallModal = function () {
        return this._small;
    };
    ModalService = __decorate([
        core_1.Injectable()
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;
//# sourceMappingURL=modal.service.js.map