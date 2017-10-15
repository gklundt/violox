import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}  from "./app.component";
import {AccordionModule, TabsModule} from "ng2-bootstrap";
import {Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";


import {VioServicesComponent} from "./vio-services/vio-services.component";
import {VioServicesMdComponent} from "./vio-services-md/vio-services-md.component";
import {VioServicesSmComponent} from "./vio-services-sm/vio-services-sm.component";
import {VioServicesXsComponent} from "./vio-services-xs/vio-services-xs.component";

import {VioBenefitsComponent} from "./vio-benefits/vio-benefits.component";
import {VioBenefitsMdComponent} from "./vio-benefits-md/vio-benefits-md.component";
import {VioBenefitsSmComponent} from "./vio-benefits-sm/vio-benefits-sm.component";
import {VioBenefitsXsComponent} from "./vio-benefits-xs/vio-benefits-xs.component";

import {VioAboutComponent} from "./vio-about/vio-about.component";
import {VioAboutMdComponent} from "./vio-about-md/vio-about-md.component";
import {VioAboutSmComponent} from "./vio-about-sm/vio-about-sm.component";
import {VioAboutXsComponent} from "./vio-about-xs/vio-about-xs.component";

import {VioHeaderComponent} from "./vio-header/vio-header.component";
import {VioHeaderMdComponent} from "./vio-header-md/vio-header-md.component";
import {VioHeaderSmComponent} from "./vio-header-sm/vio-header-sm.component";
import {VioHeaderXsComponent} from "./vio-header-xs/vio-header-xs.component";

import {VioPartnersComponent} from "./vio-partners/vio-partners.component";
import {VioPartnersMdComponent} from "./vio-partners-md/vio-partners-md.component";
import {VioPartnersSmComponent} from "./vio-partners-sm/vio-partners-sm.component";
import {VioPartnersXsComponent} from "./vio-partners-xs/vio-partners-xs.component";

import {VioContactsComponent} from "./vio-contacts/vio-contacts.component";
import {VioContactsMdComponent} from "./vio-contacts-md/vio-contacts-md.component";
import {VioContactsSmComponent} from "./vio-contacts-sm/vio-contacts-sm.component";
import {VioContactsXsComponent} from "./vio-contacts-xs/vio-contacts-xs.component";

import {VioEnforceXsComponent} from "./vio-enforce-xs/vio-enforce-xs.component";
import {VioPermitXsComponent} from "./vio-permit-xs/vio-permit-xs.component";
import {VioAlertXsComponent} from "./vio-alert-xs/vio-alert-xs.component";
import {VioHomeComponent} from "./vio-home/vio-home.component";

import {WindowRefService} from "./WindowRef.service";

import {VioNavComponent} from "./vio-nav/vio-nav.component";

@NgModule({
    imports: [BrowserModule, AccordionModule.forRoot(), TabsModule.forRoot(), Angular2FontawesomeModule],
    declarations: [AppComponent
        , VioServicesComponent
        , VioServicesMdComponent
        , VioServicesSmComponent
        , VioServicesXsComponent
        , VioBenefitsComponent
        , VioBenefitsMdComponent
        , VioBenefitsSmComponent
        , VioBenefitsXsComponent
        , VioAboutComponent
        , VioAboutMdComponent
        , VioAboutSmComponent
        , VioAboutXsComponent
        , VioHeaderComponent
        , VioHeaderMdComponent
        , VioHeaderSmComponent
        , VioHeaderXsComponent
        , VioPartnersComponent
        , VioPartnersMdComponent
        , VioPartnersSmComponent
        , VioPartnersXsComponent
        , VioContactsComponent
        , VioContactsMdComponent
        , VioContactsSmComponent
        , VioContactsXsComponent
        , VioNavComponent
        , VioEnforceXsComponent
        , VioPermitXsComponent
        , VioAlertXsComponent
        , VioHomeComponent
    ],
    providers: [WindowRefService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
