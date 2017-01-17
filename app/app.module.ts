import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}  from "./app.component";
import {VioServicesComponent} from "./vio-services/vio-services.component";
import {AccordionModule} from "ng2-bootstrap";

@NgModule({
    imports: [BrowserModule, AccordionModule.forRoot()],
    declarations: [AppComponent, VioServicesComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
