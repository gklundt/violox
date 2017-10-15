import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-alert-xs",
    templateUrl: "./app/vio-alert-xs/vio-alert-xs.component.html",
    styleUrls: ["./app/vio-alert-xs/vio-alert-xs.component.css"]
})

export class VioAlertXsComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}

