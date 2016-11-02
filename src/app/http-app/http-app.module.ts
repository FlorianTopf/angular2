import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {HttpApp} from './http-app';
import {SimpleHttpComponent} from './simple-http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [
        HttpApp,
        SimpleHttpComponent,
    ],
    exports: [HttpApp],
})
export class HttpAppModule {
    constructor () {
        console.info('HttpApp Module Mounted Successfully');
    }
}
