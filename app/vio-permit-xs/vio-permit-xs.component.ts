import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-permit-xs",
    templateUrl: "./app/vio-permit-xs/vio-permit-xs.component.html",
    styleUrls: ["./app/vio-permit-xs/vio-permit-xs.component.css"]
})

export class VioPermitXsComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}


