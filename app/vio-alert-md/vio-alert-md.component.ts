import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-alert-md",
    templateUrl: "./app/vio-alert-md/vio-alert-md.component.html",
    styleUrls: ["./app/vio-alert-md/vio-alert-md.component.css"]
})

export class VioAlertMdComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}

