import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-header-xs",
    templateUrl: "./app/vio-header-xs/vio-header-xs.component.html",
    styleUrls: ["./app/vio-header-xs/vio-header-xs.component.css"]
})
export class VioHeaderXsComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}

