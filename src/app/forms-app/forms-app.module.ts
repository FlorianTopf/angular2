import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FormsApp} from './forms-app';
import {ProductForm} from './product-form';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        FormsApp,
        ProductForm,
    ],
    exports: [
        FormsApp,
    ],
})
export class FormsAppModule {
    constructor () {
        console.info('FormsApp Module Mounted Successfully');
    }
}
