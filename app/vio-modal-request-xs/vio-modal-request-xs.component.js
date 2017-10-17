"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VioModalRequestXsComponent = (function () {
    function VioModalRequestXsComponent() {
        // this._c = new VioContactComponent();
        // this._c.sendEmail();
    }
    // When the user clicks on the button, open the modal
    VioModalRequestXsComponent.prototype.showModal = function () {
        document.getElementById("myModal").style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    VioModalRequestXsComponent.prototype.hideModal = function () {
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
        core_1.Injectable()
    ], VioModalRequestXsComponent);
    return VioModalRequestXsComponent;
}());
exports.VioModalRequestXsComponent = VioModalRequestXsComponent;
//# sourceMappingURL=vio-modal-request-xs.component.js.map