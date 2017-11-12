import {Injectable} from "@angular/core";

@Injectable()
export class ShowVideoController {
    private _showVideo: boolean;
    private _showModal: boolean;

    constructor() {
        this._showVideo = false;
        this._showModal = false;
    }

    get showModal(): boolean {
        return this._showModal;
    }

    set showModal(value: boolean) {
        this._showModal = value;
    }
    get showVideo(): boolean {
        return this._showVideo;
    }

    set showVideo(value: boolean) {
        this._showVideo = value;
    }

}