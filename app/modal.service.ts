import {Injectable } from "@angular/core";
import {ShowVideoController} from "./showVideoController";


@Injectable()
export class ModalService {

    private _small: ShowVideoController;

    constructor() {
        this._small = new ShowVideoController();
    }

    getSmallModal() {
        return this._small;
    }
}
