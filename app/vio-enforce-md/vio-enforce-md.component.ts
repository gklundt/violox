import {Component, Inject} from "@angular/core";
import {VioModalRequestXsComponent} from "../vio-modal-request-xs/vio-modal-request-xs.component";
import {ModalService} from "../modal.service";
import {ShowVideoController} from '../showVideoController';

@Component({
    selector: "vio-enforce-md",
    templateUrl: "./app/vio-enforce-md/vio-enforce-md.component.html",
    styleUrls: ["./app/vio-enforce-md/vio-enforce-md.component.css"]
})
export class VioEnforceMdComponent {
    _modal: ShowVideoController;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        this._modal.showModal = true;
        this._modal.showVideo = true;
    }

}

