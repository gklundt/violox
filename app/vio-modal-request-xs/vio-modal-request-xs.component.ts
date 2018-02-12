import {Component, HostListener, Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {RequestDemo} from "../requestDemo";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-modal-request-xs",
    templateUrl: "./app/vio-modal-request-xs/vio-modal-request-xs.component.html",
    styleUrls: ["./app/vio-modal-request-xs/vio-modal-request-xs.component.css"]
})

@Injectable()
export class VioModalRequestXsComponent {
    get showVideo(): string {
        return this.controller.getSmallModal().showVideo ? "block" : "none";
    }

    get showModal(): string {
        return this.controller.getSmallModal().showModal ? "block" : "none";
    }

    get showForm(): boolean {
        return !this.controller.getSmallModal().showThankYou;
    }

    get showThanks(): boolean {
        return this.controller.getSmallModal().showThankYou;
    }

    private data: RequestDemo;
    private body: FormData;

    constructor(@Inject(Http) private h: Http, @Inject(ModalService) private controller: ModalService) {
        this.data = new RequestDemo();
    }

    private submitted = false;


    onSubmit() {

        this.body = new FormData();
        this.body.append("request_name", this.data.request_name);
        this.body.append("request_company", this.data.request_company);
        this.body.append("request_title", this.data.request_title);
        this.body.append("request_email", this.data.request_email);
        this.body.append("request_phone", this.data.request_phone);
        this.h
            .post("https://violox.com/cgi-bin/notify-sales"
                , this.body)
            .subscribe();
        this.controller.getSmallModal().showThankYou = true;
    }

    onClose() {
        this.controller.getSmallModal().showThankYou = false;
        this.hideModal();
    }

    // When the user clicks on <span> (x), close the modal
    public hideModal(): any {
        this.controller.getSmallModal().showModal = false;
        document.getElementById("myModal").style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    @HostListener("window:onclick", [])
    onWindowClick() {
        this.hideModal();
    }

}

