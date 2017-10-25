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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var angular2_fontawesome_1 = require("angular2-fontawesome/angular2-fontawesome");
var ng2_scroll_to_1 = require("ng2-scroll-to");
var vio_services_xs_component_1 = require("./vio-services-xs/vio-services-xs.component");
var vio_services_md_component_1 = require("./vio-services-md/vio-services-md.component");
var vio_benefits_xs_component_1 = require("./vio-benefits-xs/vio-benefits-xs.component");
var vio_benefits_md_component_1 = require("./vio-benefits-md/vio-benefits-md.component");
var vio_about_xs_component_1 = require("./vio-about-xs/vio-about-xs.component");
var vio_about_md_component_1 = require("./vio-about-md/vio-about-md.component");
var vio_header_lg_component_1 = require("./vio-header-lg/vio-header-lg.component");
var vio_header_md_component_1 = require("./vio-header-md/vio-header-md.component");
var vio_header_xs_component_1 = require("./vio-header-xs/vio-header-xs.component");
var vio_partners_xs_component_1 = require("./vio-partners-xs/vio-partners-xs.component");
var vio_partners_md_component_1 = require("./vio-partners-md/vio-partners-md.component");
var vio_contacts_xs_component_1 = require("./vio-contacts-xs/vio-contacts-xs.component");
var vio_enforce_xs_component_1 = require("./vio-enforce-xs/vio-enforce-xs.component");
var vio_enforce_md_component_1 = require("./vio-enforce-md/vio-enforce-md.component");
var vio_enforce_lg_component_1 = require("./vio-enforce-lg/vio-enforce-lg.component");
var vio_alert_xs_component_1 = require("./vio-alert-xs/vio-alert-xs.component");
var vio_alert_md_component_1 = require("./vio-alert-md/vio-alert-md.component");
var vio_alert_lg_component_1 = require("./vio-alert-lg/vio-alert-lg.component");
var vio_home_component_1 = require("./vio-home/vio-home.component");
var vio_nav_component_1 = require("./vio-nav/vio-nav.component");
var vio_modal_request_xs_component_1 = require("./vio-modal-request-xs/vio-modal-request-xs.component");
var vio_permit_xs_component_1 = require("./vio-permit-xs/vio-permit-xs.component");
var vio_permit_md_component_1 = require("./vio-permit-md/vio-permit-md.component");
var vio_permit_lg_component_1 = require("./vio-permit-lg/vio-permit-lg.component");
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
                angular2_fontawesome_1.Angular2FontawesomeModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_scroll_to_1.ScrollToModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                vio_services_xs_component_1.VioServicesXsComponent,
                vio_services_md_component_1.VioServicesMdComponent,
                vio_benefits_xs_component_1.VioBenefitsXsComponent,
                vio_benefits_md_component_1.VioBenefitsMdComponent,
                vio_about_xs_component_1.VioAboutXsComponent,
                vio_about_md_component_1.VioAboutMdComponent,
                vio_header_lg_component_1.VioHeaderLgComponent,
                vio_header_md_component_1.VioHeaderMdComponent,
                vio_header_xs_component_1.VioHeaderXsComponent,
                vio_partners_xs_component_1.VioPartnersXsComponent,
                vio_partners_md_component_1.VioPartnersMdComponent,
                vio_contacts_xs_component_1.VioContactsXsComponent,
                vio_nav_component_1.VioNavComponent,
                vio_enforce_xs_component_1.VioEnforceXsComponent,
                vio_enforce_md_component_1.VioEnforceMdComponent,
                vio_enforce_lg_component_1.VioEnforceLgComponent,
                vio_modal_request_xs_component_1.VioModalRequestXsComponent,
                vio_permit_xs_component_1.VioPermitXsComponent,
                vio_permit_md_component_1.VioPermitMdComponent,
                vio_permit_lg_component_1.VioPermitLgComponent,
                vio_alert_xs_component_1.VioAlertXsComponent,
                vio_alert_md_component_1.VioAlertMdComponent,
                vio_alert_lg_component_1.VioAlertLgComponent,
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