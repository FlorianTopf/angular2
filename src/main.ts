import {
  Component,
  View,
  bootstrap
} from 'angular2/angular2';

import HelloWorld from './hello-world/hello-world';

@Component({
  selector: 'main'
})

@View({
  directives: [ HelloWorld ],
  template: '<hello-world></hello-world>'
})

class Main {

}

bootstrap(Main);
