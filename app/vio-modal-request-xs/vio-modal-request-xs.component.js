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
var http_1 = require("@angular/http");
var requestDemo_1 = require("../requestDemo");
var modal_service_1 = require("../modal.service");
var VioModalRequestXsComponent = (function () {
    function VioModalRequestXsComponent(h, controller) {
        this.h = h;
        this.controller = controller;
        this.submitted = false;
        this.data = new requestDemo_1.RequestDemo();
    }
    Object.defineProperty(VioModalRequestXsComponent.prototype, "showVideo", {
        get: function () {
            return this.controller.getSmallModal().showVideo ? "block" : "none";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VioModalRequestXsComponent.prototype, "showModal", {
        get: function () {
            return this.controller.getSmallModal().showModal ? "block" : "none";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VioModalRequestXsComponent.prototype, "showForm", {
        get: function () {
            return !this.controller.getSmallModal().showThankYou;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VioModalRequestXsComponent.prototype, "showThanks", {
        get: function () {
            return this.controller.getSmallModal().showThankYou;
        },
        enumerable: true,
        configurable: true
    });
    VioModalRequestXsComponent.prototype.onSubmit = function () {
        this.body = new FormData();
        this.body.append("request_name", this.data.request_name);
        this.body.append("request_company", this.data.request_company);
        this.body.append("request_title", this.data.request_title);
        this.body.append("request_email", this.data.request_email);
        this.body.append("request_phone", this.data.request_phone);
        this.h
            .post("http://violox.com/cgi-bin/notify-sales", this.body)
            .subscribe();
        this.controller.getSmallModal().showThankYou = true;
    };
    VioModalRequestXsComponent.prototype.onClose = function () {
        this.controller.getSmallModal().showThankYou = false;
        this.hideModal();
    };
    // When the user clicks on <span> (x), close the modal
    VioModalRequestXsComponent.prototype.hideModal = function () {
        this.controller.getSmallModal().showModal = false;
        document.getElementById("myModal").style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    VioModalRequestXsComponent.prototype.onWindowClick = function () {
        this.hideModal();
    };
    __decorate([
        core_1.HostListener("window:onclick", [])
    ], VioModalRequestXsComponent.prototype, "onWindowClick", null);
    VioModalRequestXsComponent = __decorate([
        core_1.Component({
            selector: "vio-modal-request-xs",
            templateUrl: "./app/vio-modal-request-xs/vio-modal-request-xs.component.html",
            styleUrls: ["./app/vio-modal-request-xs/vio-modal-request-xs.component.css"]
        }),
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), __param(1, core_1.Inject(modal_service_1.ModalService))
    ], VioModalRequestXsComponent);
    return VioModalRequestXsComponent;
}());
exports.VioModalRequestXsComponent = VioModalRequestXsComponent;
//# sourceMappingURL=vio-modal-request-xs.component.js.map