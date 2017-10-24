import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-benefits-xs",
    templateUrl: "./app/vio-benefits-xs/vio-benefits-xs.component.html",
    styleUrls: ["./app/vio-benefits-xs/vio-benefits-xs.component.css"]
})
export class VioBenefitsXsComponent {
    _modal: VioModalRequestXsComponent;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        return this._modal.showModal();
    }
}

