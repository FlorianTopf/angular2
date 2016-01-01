import {
    Component,
    View
} from 'angular2/core';

import {
    bootstrap
} from 'angular2/platform/browser';

import HelloWorld from './hello-world/hello-world';
import RedditApp from './reddit-app/reddit-app';
import InventoryApp from './inventory-app/inventory-app';

@Component({
    selector: 'main'
})

@View({
    directives: [HelloWorld, RedditApp, InventoryApp],
    templateUrl: 'app/main.html'
})

class Main {
    constructor () {
        console.info('Main Component Mounted Successfully');
    }
}

bootstrap(Main);
