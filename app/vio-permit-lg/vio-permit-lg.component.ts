import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-permit-lg",
    templateUrl: "./app/vio-permit-lg/vio-permit-lg.component.html",
    styleUrls: ["./app/vio-permit-lg/vio-permit-lg.component.css"]
})

export class VioPermitLgComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}


