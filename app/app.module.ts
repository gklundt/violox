// import {VioServicesComponent} from "./vio-services/vio-services.component";
// import {VioServicesMdComponent} from "./vio-services-md/vio-services-md.component";
// import {VioServicesSmComponent} from "./vio-services-sm/vio-services-sm.component";
// import {VioBenefitsComponent} from "./vio-benefits/vio-benefits.component";
// import {VioBenefitsMdComponent} from "./vio-benefits-md/vio-benefits-md.component";
// import {VioBenefitsSmComponent} from "./vio-benefits-sm/vio-benefits-sm.component";
// import {VioAboutComponent} from "./vio-about/vio-about.component";
// import {VioAboutMdComponent} from "./vio-about-md/vio-about-md.component";
// import {VioAboutSmComponent} from "./vio-about-sm/vio-about-sm.component";
// import {VioHeaderMdComponent} from "./vio-header-md/vio-header-md.component";
// import {VioHeaderSmComponent} from "./vio-header-sm/vio-header-sm.component";
// import {VioPartnersComponent} from "./vio-partners/vio-partners.component";
// import {VioPartnersMdComponent} from "./vio-partners-md/vio-partners-md.component";
// import {VioPartnersSmComponent} from "./vio-partners-sm/vio-partners-sm.component";
// import {VioContactsComponent} from "./vio-contacts/vio-contacts.component";
// import {VioContactsMdComponent} from "./vio-contacts-md/vio-contacts-md.component";
// import {VioContactsSmComponent} from "./vio-contacts-sm/vio-contacts-sm.component";

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AccordionModule, TabsModule} from "ng2-bootstrap";
import {Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";

import {VioServicesXsComponent} from "./vio-services-xs/vio-services-xs.component";
import {ModalService} from "./modal.service";

import {VioBenefitsXsComponent} from "./vio-benefits-xs/vio-benefits-xs.component";
import {VioAboutXsComponent} from "./vio-about-xs/vio-about-xs.component";
import {VioHeaderComponent} from "./vio-header/vio-header.component";
import {VioHeaderXsComponent} from "./vio-header-xs/vio-header-xs.component";
import {VioPartnersXsComponent} from "./vio-partners-xs/vio-partners-xs.component";
import {VioContactsXsComponent} from "./vio-contacts-xs/vio-contacts-xs.component";
import {VioEnforceXsComponent} from "./vio-enforce-xs/vio-enforce-xs.component";
import {VioAlertXsComponent} from "./vio-alert-xs/vio-alert-xs.component";
import {VioHomeComponent} from "./vio-home/vio-home.component";
import {VioNavComponent} from "./vio-nav/vio-nav.component";
import {VioModalRequestXsComponent} from "./vio-modal-request-xs/vio-modal-request-xs.component";
import {VioPermitXsComponent} from "./vio-permit-xs/vio-permit-xs.component";

@NgModule({
    imports: [BrowserModule, AccordionModule.forRoot(), TabsModule.forRoot(), Angular2FontawesomeModule],
    declarations: [AppComponent
        , VioServicesXsComponent
        , VioBenefitsXsComponent
        , VioAboutXsComponent
        , VioHeaderComponent
        , VioHeaderXsComponent
        , VioPartnersXsComponent
        , VioContactsXsComponent
        , VioNavComponent
        , VioEnforceXsComponent
        , VioModalRequestXsComponent
        , VioPermitXsComponent
        , VioAlertXsComponent
        , VioHomeComponent
        // , VioServicesComponent
        // , VioServicesMdComponent
        // , VioServicesSmComponent
        // , VioBenefitsComponent
        // , VioBenefitsMdComponent
        // , VioBenefitsSmComponent
        // , VioAboutComponent
        // , VioAboutMdComponent
        // , VioAboutSmComponent
        // , VioHeaderMdComponent
        // , VioHeaderSmComponent
        // , VioPartnersComponent
        // , VioPartnersMdComponent
        // , VioPartnersSmComponent
        // , VioContactsComponent
        // , VioContactsMdComponent
        // , VioContactsSmComponent
    ],
    providers: [ModalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
