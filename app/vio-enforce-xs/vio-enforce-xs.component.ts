import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-enforce-xs",
    templateUrl: "./app/vio-enforce-xs/vio-enforce-xs.component.html",
    styleUrls: ["./app/vio-enforce-xs/vio-enforce-xs.component.css"]
})
export class VioEnforceXsComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}

