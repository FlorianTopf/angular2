import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world';
import {RedditAppModule} from './reddit-app/reddit-app.module';
import {InventoryAppModule} from './inventory-app/inventory-app.module';

@NgModule({
    imports: [
        BrowserModule,
        RedditAppModule,
        InventoryAppModule,
    ],
    declarations: [
        AppComponent,
        HelloWorldComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor () {
        console.info('App Module Mounted Successfully');
    }
}
