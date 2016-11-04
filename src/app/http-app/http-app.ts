import {Component} from '@angular/core';

@Component({
    selector: 'http-app',
    templateUrl: 'http-app.html',
})
export class HttpApp {
    constructor() {
        console.info('HttpApp Component Mounted Successfully');
    }
}
