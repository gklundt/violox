"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var vio_services_component_1 = require("./vio-services/vio-services.component");
var vio_benefits_component_1 = require("./vio-benefits/vio-benefits.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var angular2_fontawesome_1 = require("angular2-fontawesome/angular2-fontawesome");
var vio_about_component_1 = require("./vio-about/vio-about.component");
var vio_about_md_component_1 = require("./vio-about-md/vio-about-md.component");
var vio_header_component_1 = require("./vio-header/vio-header.component");
var vio_partners_component_1 = require("./vio-partners/vio-partners.component");
var vio_contacts_component_1 = require("./vio-contacts/vio-contacts.component");
var vio_nav_component_1 = require("./vio-nav/vio-nav.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_bootstrap_1.AccordionModule.forRoot(), ng2_bootstrap_1.TabsModule.forRoot(), angular2_fontawesome_1.Angular2FontawesomeModule],
            declarations: [
                app_component_1.AppComponent,
                vio_services_component_1.VioServicesComponent,
                vio_benefits_component_1.VioBenefitsComponent,
                vio_about_component_1.VioAboutComponent,
                vio_about_md_component_1.VioAboutMdComponent,
                vio_header_component_1.VioHeaderComponent,
                vio_partners_component_1.VioPartnersComponent,
                vio_contacts_component_1.VioContactsComponent,
                vio_nav_component_1.VioNavComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map