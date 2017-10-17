"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import * as email from "../../node_modules/emailjs/email.js";
// import * as client from "../../node_modules/emailjs/smtp/client.js"
var VioContactComponent = (function () {
    function VioContactComponent() {
        // this._server = email.server.connect({
        //     user: "gklundt@violox.com",
        //     password: "btbb crmx ofeu tmmh",
        // "vtovkkbivvurzmxs"
        //     host: "smtp.google.com:465",
        //     ssl: true
        // });
    }
    VioContactComponent.prototype.sendEmail = function () {
        // this._server.send(
        //     {
        //         text: "i hope this works",
        //         from: this._email,
        //         to: "Gordon <gklundt@violox.com>",
        //         subject: "testing emailjs"
        //     }, function (err, message) {
        //         console.log(err || message);
        //     }
        // );
    };
    VioContactComponent = __decorate([
        core_1.Injectable()
    ], VioContactComponent);
    return VioContactComponent;
}());
exports.VioContactComponent = VioContactComponent;
//# sourceMappingURL=vio-contact.component.js.map