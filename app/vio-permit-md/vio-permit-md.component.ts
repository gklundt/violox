import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-permit-md",
    templateUrl: "./app/vio-permit-md/vio-permit-md.component.html",
    styleUrls: ["./app/vio-permit-md/vio-permit-md.component.css"]
})

export class VioPermitMdComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}


