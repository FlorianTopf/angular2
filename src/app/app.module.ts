import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world';
import {InventoryApp} from './inventory-app/inventory-app';
import {ProductsList} from './product-list/product-list';
import {ProductRow} from './product-row/product-row';
import {ProductImage} from './product-row/product-image';
import {ProductDepartment} from './product-row/product-department';
import {PriceDisplay} from './product-row/price-display';
import {RedditArticle} from './reddit-article/reddit-article';

// TODO implement different modules and put respective declarations there

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        HelloWorldComponent,
        InventoryApp,
        ProductsList,
        ProductRow,
        ProductImage,
        ProductDepartment,
        PriceDisplay,
        RedditArticle
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor () {
        console.info('App Module Mounted Successfully');
    }
}
