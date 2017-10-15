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
var vio_services_component_1 = require("./vio-services/vio-services.component");
var vio_services_md_component_1 = require("./vio-services-md/vio-services-md.component");
var vio_services_sm_component_1 = require("./vio-services-sm/vio-services-sm.component");
var vio_services_xs_component_1 = require("./vio-services-xs/vio-services-xs.component");
var vio_benefits_component_1 = require("./vio-benefits/vio-benefits.component");
var vio_benefits_md_component_1 = require("./vio-benefits-md/vio-benefits-md.component");
var vio_benefits_sm_component_1 = require("./vio-benefits-sm/vio-benefits-sm.component");
var vio_benefits_xs_component_1 = require("./vio-benefits-xs/vio-benefits-xs.component");
var vio_about_component_1 = require("./vio-about/vio-about.component");
var vio_about_md_component_1 = require("./vio-about-md/vio-about-md.component");
var vio_about_sm_component_1 = require("./vio-about-sm/vio-about-sm.component");
var vio_about_xs_component_1 = require("./vio-about-xs/vio-about-xs.component");
var vio_header_component_1 = require("./vio-header/vio-header.component");
var vio_header_md_component_1 = require("./vio-header-md/vio-header-md.component");
var vio_header_sm_component_1 = require("./vio-header-sm/vio-header-sm.component");
var vio_header_xs_component_1 = require("./vio-header-xs/vio-header-xs.component");
var vio_partners_component_1 = require("./vio-partners/vio-partners.component");
var vio_partners_md_component_1 = require("./vio-partners-md/vio-partners-md.component");
var vio_partners_sm_component_1 = require("./vio-partners-sm/vio-partners-sm.component");
var vio_partners_xs_component_1 = require("./vio-partners-xs/vio-partners-xs.component");
var vio_contacts_component_1 = require("./vio-contacts/vio-contacts.component");
var vio_contacts_md_component_1 = require("./vio-contacts-md/vio-contacts-md.component");
var vio_contacts_sm_component_1 = require("./vio-contacts-sm/vio-contacts-sm.component");
var vio_contacts_xs_component_1 = require("./vio-contacts-xs/vio-contacts-xs.component");
var vio_enforce_xs_component_1 = require("./vio-enforce-xs/vio-enforce-xs.component");
var vio_permit_xs_component_1 = require("./vio-permit-xs/vio-permit-xs.component");
var vio_alert_xs_component_1 = require("./vio-alert-xs/vio-alert-xs.component");
var vio_home_component_1 = require("./vio-home/vio-home.component");
var WindowRef_service_1 = require("./WindowRef.service");
var vio_nav_component_1 = require("./vio-nav/vio-nav.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_bootstrap_1.AccordionModule.forRoot(), ng2_bootstrap_1.TabsModule.forRoot(), angular2_fontawesome_1.Angular2FontawesomeModule],
            declarations: [app_component_1.AppComponent,
                vio_services_component_1.VioServicesComponent,
                vio_services_md_component_1.VioServicesMdComponent,
                vio_services_sm_component_1.VioServicesSmComponent,
                vio_services_xs_component_1.VioServicesXsComponent,
                vio_benefits_component_1.VioBenefitsComponent,
                vio_benefits_md_component_1.VioBenefitsMdComponent,
                vio_benefits_sm_component_1.VioBenefitsSmComponent,
                vio_benefits_xs_component_1.VioBenefitsXsComponent,
                vio_about_component_1.VioAboutComponent,
                vio_about_md_component_1.VioAboutMdComponent,
                vio_about_sm_component_1.VioAboutSmComponent,
                vio_about_xs_component_1.VioAboutXsComponent,
                vio_header_component_1.VioHeaderComponent,
                vio_header_md_component_1.VioHeaderMdComponent,
                vio_header_sm_component_1.VioHeaderSmComponent,
                vio_header_xs_component_1.VioHeaderXsComponent,
                vio_partners_component_1.VioPartnersComponent,
                vio_partners_md_component_1.VioPartnersMdComponent,
                vio_partners_sm_component_1.VioPartnersSmComponent,
                vio_partners_xs_component_1.VioPartnersXsComponent,
                vio_contacts_component_1.VioContactsComponent,
                vio_contacts_md_component_1.VioContactsMdComponent,
                vio_contacts_sm_component_1.VioContactsSmComponent,
                vio_contacts_xs_component_1.VioContactsXsComponent,
                vio_nav_component_1.VioNavComponent,
                vio_enforce_xs_component_1.VioEnforceXsComponent,
                vio_permit_xs_component_1.VioPermitXsComponent,
                vio_alert_xs_component_1.VioAlertXsComponent,
                vio_home_component_1.VioHomeComponent
            ],
            providers: [WindowRef_service_1.WindowRefService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map