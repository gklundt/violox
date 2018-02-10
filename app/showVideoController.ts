import {Injectable} from "@angular/core";

@Injectable()
export class ShowVideoController {
    private _showVideo: boolean;
    private _showModal: boolean;
    private _showThankYou: boolean;

    constructor() {
        this._showVideo = false;
        this._showModal = false;
        this._showThankYou = false;
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

    get showThankYou(): boolean {
        return this._showThankYou;
    }

    set showThankYou(value: boolean) {
        this._showThankYou = value;
    }
}