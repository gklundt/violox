"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShowVideoController = /** @class */ (function () {
    function ShowVideoController() {
        this._showVideo = false;
        this._showModal = false;
        this._showThankYou = false;
    }
    Object.defineProperty(ShowVideoController.prototype, "showModal", {
        get: function () {
            return this._showModal;
        },
        set: function (value) {
            this._showModal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowVideoController.prototype, "showVideo", {
        get: function () {
            return this._showVideo;
        },
        set: function (value) {
            this._showVideo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowVideoController.prototype, "showThankYou", {
        get: function () {
            return this._showThankYou;
        },
        set: function (value) {
            this._showThankYou = value;
        },
        enumerable: true,
        configurable: true
    });
    ShowVideoController = __decorate([
        core_1.Injectable()
    ], ShowVideoController);
    return ShowVideoController;
}());
exports.ShowVideoController = ShowVideoController;
//# sourceMappingURL=showVideoController.js.map