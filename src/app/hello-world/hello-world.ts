import {
    Component,
    View
} from 'angular2/core';

import {
    NgFor
} from 'angular2/common';

@Component({
    selector: 'hello-world'
})

@View({
    directives: [NgFor],
    templateUrl: 'app/hello-world/hello-world.html'
})

export default class HelloWorld {
    public names: string[];

    constructor () {
        console.info('HelloWorld Component Mounted Successfully');
        this.names = ['Florian', 'Sabrina'];
    }
}
