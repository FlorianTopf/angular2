import {
    Component
} from 'angular2/core';

import {
    bootstrap
} from 'angular2/platform/browser';

import HelloWorld from './hello-world/hello-world';
import RedditApp from './reddit-app/reddit-app';

@Component({
    directives: [HelloWorld, RedditApp],
    selector: 'main',
    templateUrl: 'app/main.html'
})

class Main {
    constructor () {
        console.info('Main Component Mounted Successfully');
    }
}

bootstrap(Main);
