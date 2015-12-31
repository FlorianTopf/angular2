import {
    Component,
    View
} from 'angular2/core';

import {
    bootstrap
} from 'angular2/platform/browser';

import HelloWorld from './hello-world/hello-world';
import RedditApp from './reddit-app/reddit-app';

@Component({
    selector: 'main'
})

@View({
    directives: [HelloWorld, RedditApp],
    templateUrl: 'app/main.html'
})

class Main {
    constructor () {
        console.info('Main Component Mounted Successfully');
    }
}

bootstrap(Main);
