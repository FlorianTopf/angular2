import {
    Component
} from 'angular2/core';

import {
    bootstrap
} from 'angular2/platform/browser';

import HelloWorld from './hello-world/hello-world';
import RedditApp from './reddit-app/reddit-app';
import InventoryApp from './inventory-app/inventory-app';

@Component({
    directives: [HelloWorld, RedditApp, InventoryApp],
    selector: 'main',
    templateUrl: 'app/main.html'
})

class Main {
    constructor () {
        console.info('Main Component Mounted Successfully');
    }
}

bootstrap(Main);
