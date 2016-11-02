import {Component} from '@angular/core';

@Component({
    selector: 'forms-app',
    templateUrl: 'app/forms-app/forms-app.html',
})
export class FormsApp {
    constructor () {
        console.info('Forms App Component Mounted Successfully');
    }
}
