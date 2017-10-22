import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-alert-lg",
    templateUrl: "./app/vio-alert-lg/vio-alert-lg.component.html",
    styleUrls: ["./app/vio-alert-lg/vio-alert-lg.component.css"]
})

export class VioAlertLgComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}

