import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";
import {ShowVideoController} from '../showVideoController';

@Component({
    selector: "vio-benefits-md",
    templateUrl: "./app/vio-benefits-md/vio-benefits-md.component.html",
    styleUrls: ["./app/vio-benefits-md/vio-benefits-md.component.css"]
})
export class VioBenefitsMdComponent {
    _modal: ShowVideoController;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        this._modal.showModal = true;
        this._modal.showVideo = false;
    }

}

