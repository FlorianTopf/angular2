import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor() {
        console.info('App Component Mounted Successfully');
    }
}
