import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AccordionModule, TabsModule} from "ng2-bootstrap";
import {Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";

import {VioServicesXsComponent} from "./vio-services-xs/vio-services-xs.component";
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

import {ModalService} from "./modal.service";

@NgModule({
    imports: [
        BrowserModule
        , AccordionModule.forRoot()
        , TabsModule.forRoot()
        , Angular2FontawesomeModule
        , FormsModule
        , HttpModule
    ],
    declarations: [
        AppComponent
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
    ],
    providers: [ModalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
