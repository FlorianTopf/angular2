import {
    Component
} from 'angular2/core';

import {
    NgFor
} from 'angular2/common';

@Component({
    directives: [NgFor],
    selector: 'hello-world',
    templateUrl: 'app/hello-world/hello-world.html'
})

export default class HelloWorld {
    public names: string[];

    constructor () {
        console.info('HelloWorld Component Mounted Successfully');
        this.names = ['Florian', 'Sabrina'];
    }
}
