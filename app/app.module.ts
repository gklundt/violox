import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}  from "./app.component";
import {VioServicesComponent} from "./vio-services/vio-services.component";
import {VioBioComponent} from "./vio-bio/vio-bio.component";
import {AccordionModule, TabsModule} from "ng2-bootstrap";

@NgModule({
    imports: [BrowserModule, AccordionModule.forRoot(), TabsModule.forRoot()],
    declarations: [AppComponent, VioServicesComponent, VioBioComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
