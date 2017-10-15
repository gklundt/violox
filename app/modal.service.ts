import {OnInit, Injectable} from "@angular/core";
import {VioModalRequestXsComponent} from "./vio-modal-request-xs/vio-modal-request-xs.component";


@Injectable()
export class ModalService implements OnInit {
    ngOnInit(): void {
        this._small = new VioModalRequestXsComponent();
    }

    _small: VioModalRequestXsComponent;

    constructor() {
        this._small = new VioModalRequestXsComponent();
    }

    getSmallModal() {

        return this._small;
    }


}
