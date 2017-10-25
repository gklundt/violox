import {OnInit, Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {VioModalRequestXsComponent} from "./vio-modal-request-xs/vio-modal-request-xs.component";

@Injectable()
export class ModalService implements OnInit {
    ngOnInit(): void {
        this._small = new VioModalRequestXsComponent(this.h);
    }

    _small: VioModalRequestXsComponent;

    constructor(@Inject(Http) private h: Http) {
        this._small = new VioModalRequestXsComponent(this.h);
    }

    getSmallModal() {
        return this._small;
    }
}
