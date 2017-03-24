import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}  from "./app.component";
import {VioServicesComponent} from "./vio-services/vio-services.component";
import {VioBenefitsComponent} from "./vio-benefits/vio-benefits.component";
import {AccordionModule, TabsModule} from "ng2-bootstrap";
import {Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";
import {VioAboutComponent} from "./vio-about/vio-about.component";
import {VioHeaderComponent} from "./vio-header/vio-header.component";
import {VioPartnersComponent} from "./vio-partners/vio-partners.component";
import {VioContactsComponent} from "./vio-contacts/vio-contacts.component";
@NgModule({
    imports: [BrowserModule, AccordionModule.forRoot(), TabsModule.forRoot(), Angular2FontawesomeModule],
    declarations: [
        AppComponent,
        VioServicesComponent,
        VioBenefitsComponent,
        VioAboutComponent,
        VioHeaderComponent,
        VioPartnersComponent,
        VioContactsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
