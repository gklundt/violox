import {Component, HostListener, Injectable, OnInit} from "@angular/core";
import {ModalService} from "../modal.service";

@Component({
    selector: "vio-modal-request-xs",
    templateUrl: "./app/vio-modal-request-xs/vio-modal-request-xs.component.html",
    styleUrls: ["./app/vio-modal-request-xs/vio-modal-request-xs.component.css"]
})

@Injectable()
export class VioModalRequestXsComponent {


    // When the user clicks on the button, open the modal
    public showModal(): any {
        document.getElementById("myModal").style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    public hideModal(): any {
        document.getElementById("myModal").style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    @HostListener("window:onclick", [])
    onWindowClick() {
        this.hideModal();
    }


}

