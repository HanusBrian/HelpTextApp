import { Component, OnInit } from '@angular/core';

import { HelpTextService } from './helptext.service';

@Component({
    selector: "helptext",
    templateUrl: "C:/Users/hanusbe/NQDaemon/HelpTextApp/src/app/helptext.component.html",
    styleUrls: ["C:/Users/hanusbe/NQDaemon/HelpTextApp/src/app/helptext.component.css"],
    providers: [HelpTextService]
})

export class HelpTextComponent {
    constructor(private helptextService: HelpTextService){}
    helptextData: Object[] = [];

    ngOnInit() {
        this.helptextService.getHelptextArray().then(data => this.buildHelptext(data));
    }

    buildHelptext(data:Object[]) {
        this.helptextData = data;
    }
}