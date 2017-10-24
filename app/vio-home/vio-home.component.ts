import {HostListener} from "@angular/core";
import {Component} from "@angular/core";


@Component({
    selector: "vio-home",
    templateUrl: "./app/vio-home/vio-home.component.html",
    styleUrls: ["./app/vio-home/vio-home.component.css"]
})


export class VioHomeComponent {
    scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("to-top").style.display = "block";
        } else {
            document.getElementById("to-top").style.display = "none";
        }
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.scrollFunction();
    }
}

