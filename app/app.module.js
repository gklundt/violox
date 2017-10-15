"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var angular2_fontawesome_1 = require("angular2-fontawesome/angular2-fontawesome");
var vio_services_xs_component_1 = require("./vio-services-xs/vio-services-xs.component");
var vio_benefits_xs_component_1 = require("./vio-benefits-xs/vio-benefits-xs.component");
var vio_about_xs_component_1 = require("./vio-about-xs/vio-about-xs.component");
var vio_header_component_1 = require("./vio-header/vio-header.component");
var vio_header_xs_component_1 = require("./vio-header-xs/vio-header-xs.component");
var vio_partners_xs_component_1 = require("./vio-partners-xs/vio-partners-xs.component");
var vio_contacts_xs_component_1 = require("./vio-contacts-xs/vio-contacts-xs.component");
var vio_enforce_xs_component_1 = require("./vio-enforce-xs/vio-enforce-xs.component");
var vio_alert_xs_component_1 = require("./vio-alert-xs/vio-alert-xs.component");
var vio_home_component_1 = require("./vio-home/vio-home.component");
var vio_nav_component_1 = require("./vio-nav/vio-nav.component");
var vio_modal_request_xs_component_1 = require("./vio-modal-request-xs/vio-modal-request-xs.component");
var vio_permit_xs_component_1 = require("./vio-permit-xs/vio-permit-xs.component");
var modal_service_1 = require("./modal.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.AccordionModule.forRoot(),
                ng2_bootstrap_1.TabsModule.forRoot(),
                angular2_fontawesome_1.Angular2FontawesomeModule
            ],
            declarations: [
                app_component_1.AppComponent,
                vio_services_xs_component_1.VioServicesXsComponent,
                vio_benefits_xs_component_1.VioBenefitsXsComponent,
                vio_about_xs_component_1.VioAboutXsComponent,
                vio_header_component_1.VioHeaderComponent,
                vio_header_xs_component_1.VioHeaderXsComponent,
                vio_partners_xs_component_1.VioPartnersXsComponent,
                vio_contacts_xs_component_1.VioContactsXsComponent,
                vio_nav_component_1.VioNavComponent,
                vio_enforce_xs_component_1.VioEnforceXsComponent,
                vio_modal_request_xs_component_1.VioModalRequestXsComponent,
                vio_permit_xs_component_1.VioPermitXsComponent,
                vio_alert_xs_component_1.VioAlertXsComponent,
                vio_home_component_1.VioHomeComponent
            ],
            providers: [modal_service_1.ModalService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map