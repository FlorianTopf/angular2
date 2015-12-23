import {
    Component,
    View
} from 'angular2/core';

@Component({
    selector: 'hello-world'
})

@View({
    templateUrl: 'app/hello-world/hello-world.html'
})

export default class HelloWorld {
    public names: string[];

    constructor () {
        console.info('Angular2 Component Mounted Successfully');
        this.names = ['Florian', 'Sabrina'];
    }
}
