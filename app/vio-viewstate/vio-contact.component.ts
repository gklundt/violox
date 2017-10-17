import {Injectable} from "@angular/core";
// import * as email from "../../node_modules/emailjs/email.js";
// import * as client from "../../node_modules/emailjs/smtp/client.js"

@Injectable()
export class VioContactComponent {
    private _name: string;
    private _company: string;
    private _title: string;
    private _email: string;
    private _phone: string;
    private _server: any;

    constructor() {
        // this._server = email.server.connect({
        //     user: "gklundt@violox.com",
        //     password: "btbb crmx ofeu tmmh",
        // "vtovkkbivvurzmxs"
        //     host: "smtp.google.com:465",
        //     ssl: true
        // });
    }

    sendEmail() {
        // this._server.send(
        //     {
        //         text: "i hope this works",
        //         from: this._email,
        //         to: "Gordon <gklundt@violox.com>",
        //         subject: "testing emailjs"
        //     }, function (err, message) {
        //         console.log(err || message);
        //     }
        // );


    }
}