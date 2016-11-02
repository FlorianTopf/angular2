import {Component} from '@angular/core';

@Component({
    selector: 'http-app',
    templateUrl: 'app/http-app/http-app.html',
})
export class HttpApp {
    constructor () {
        console.info('HttpApp Component Mounted Successfully');
    }
}
