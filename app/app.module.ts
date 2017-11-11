import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
// import {AccordionModule, TabsModule} from "ng2-bootstrap";
import {Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";
import {ScrollToModule} from "ng2-scroll-to";
import {VioServicesXsComponent} from "./vio-services-xs/vio-services-xs.component";
import {VioServicesMdComponent} from "./vio-services-md/vio-services-md.component";
import {VioBenefitsXsComponent} from "./vio-benefits-xs/vio-benefits-xs.component";
import {VioBenefitsMdComponent} from "./vio-benefits-md/vio-benefits-md.component";
import {VioAboutXsComponent} from "./vio-about-xs/vio-about-xs.component";
import {VioAboutMdComponent} from "./vio-about-md/vio-about-md.component";
import {VioHeaderLgComponent} from "./vio-header-lg/vio-header-lg.component";
import {VioHeaderMdComponent} from "./vio-header-md/vio-header-md.component";
import {VioHeaderXsComponent} from "./vio-header-xs/vio-header-xs.component";
import {VioPartnersXsComponent} from "./vio-partners-xs/vio-partners-xs.component";
import {VioPartnersMdComponent} from "./vio-partners-md/vio-partners-md.component";
import {VioContactsXsComponent} from "./vio-contacts-xs/vio-contacts-xs.component";
import {VioEnforceXsComponent} from "./vio-enforce-xs/vio-enforce-xs.component";
import {VioEnforceMdComponent} from "./vio-enforce-md/vio-enforce-md.component";
import {VioEnforceLgComponent} from "./vio-enforce-lg/vio-enforce-lg.component";
import {VioAlertXsComponent} from "./vio-alert-xs/vio-alert-xs.component";
import {VioAlertMdComponent} from "./vio-alert-md/vio-alert-md.component";
import {VioAlertLgComponent} from "./vio-alert-lg/vio-alert-lg.component";
import {VioHomeComponent} from "./vio-home/vio-home.component";
import {VioNavComponent} from "./vio-nav/vio-nav.component";
import {VioModalRequestXsComponent} from "./vio-modal-request-xs/vio-modal-request-xs.component";
import {VioPermitXsComponent} from "./vio-permit-xs/vio-permit-xs.component";
import {VioPermitMdComponent} from "./vio-permit-md/vio-permit-md.component";
import {VioPermitLgComponent} from "./vio-permit-lg/vio-permit-lg.component";

import {ModalService} from "./modal.service";

@NgModule({
    imports: [
        BrowserModule
        , Angular2FontawesomeModule
        , FormsModule
        , HttpModule
        , ScrollToModule.forRoot()
    ],
    declarations: [
        AppComponent
        , VioServicesXsComponent
        , VioServicesMdComponent
        , VioBenefitsXsComponent
        , VioBenefitsMdComponent
        , VioAboutXsComponent
        , VioAboutMdComponent
        , VioHeaderLgComponent
        , VioHeaderMdComponent
        , VioHeaderXsComponent
        , VioPartnersXsComponent
        , VioPartnersMdComponent
        , VioContactsXsComponent
        , VioNavComponent
        , VioEnforceXsComponent
        , VioEnforceMdComponent
        , VioEnforceLgComponent
        , VioModalRequestXsComponent
        , VioPermitXsComponent
        , VioPermitMdComponent
        , VioPermitLgComponent
        , VioAlertXsComponent
        , VioAlertMdComponent
        , VioAlertLgComponent
        , VioHomeComponent
    ],
    providers: [ModalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
