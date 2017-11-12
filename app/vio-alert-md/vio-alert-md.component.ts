import {Component, Inject} from "@angular/core";
import {ModalService} from "../modal.service";
import {ShowVideoController} from "../showVideoController";

@Component({
    selector: "vio-alert-md",
    templateUrl: "./app/vio-alert-md/vio-alert-md.component.html",
    styleUrls: ["./app/vio-alert-md/vio-alert-md.component.css"]
})

export class VioAlertMdComponent {
    _modal: ShowVideoController;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        this._modal.showModal = true;
        this._modal.showVideo = false;
    }
}

