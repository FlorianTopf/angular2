import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    constructor () {
        console.info('Main Component Mounted Successfully');
    }
}
