import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-svc-xs",
    templateUrl: "./app/vio-services-xs/vio-services-xs.component.html",
    styleUrls: ["./app/vio-services-xs/vio-services-xs.component.css"]
})
export class VioServicesXsComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}

