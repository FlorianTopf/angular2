import {Component} from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: 'app/hello-world/hello-world.html',
})
export class HelloWorldComponent {
    public names: string[];

    constructor() {
        console.info('HelloWorld Component Mounted Successfully');
        this.names = ['Florian', 'Sabrina'];
    }
}
