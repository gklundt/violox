import {Component, Inject} from "@angular/core";
import {ModalService} from "../modal.service";
import {ShowVideoController} from "../showVideoController";

@Component({
    selector: "vio-alert-lg",
    templateUrl: "./app/vio-alert-lg/vio-alert-lg.component.html",
    styleUrls: ["./app/vio-alert-lg/vio-alert-lg.component.css"],
})

export class VioAlertLgComponent {
    _modal: ShowVideoController;

    constructor(@Inject(ModalService) private x: ModalService) {
        this._modal = x.getSmallModal();
    }

    openModal() {
        this._modal.showModal = true;
        this._modal.showVideo = false;
    }
}

