import {
    Component
} from 'angular2/core';

import {
    bootstrap
} from 'angular2/platform/browser';

import HelloWorld from './hello-world/hello-world';

@Component({
    directives: [HelloWorld],
    selector: 'main',
    template: `<hello-world></hello-world>`
})

class Main {
    constructor () {
        console.info('Main Component Mounted Successfully');
    }
}

bootstrap(Main);
