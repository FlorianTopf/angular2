import {
  Component,
  View
} from 'angular2/core';

@Component({
  selector: 'hello-world'
})

@View({
  templateUrl: 'hello-world/hello-world.html'
})

export default class HelloWorld {

  constructor() {
    console.info('Angular2 Component Mounted Successfully');
  }

}
