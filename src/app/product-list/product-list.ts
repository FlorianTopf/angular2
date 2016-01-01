import {
    Component,
    View,
    EventEmitter
} from 'angular2/core';

import {
    NgFor
} from 'angular2/common';

import Product from '../product-row/product';
import ProductRow from '../product-row/product-row';

@Component({
    selector: 'products-list',
    inputs: ['productList: products'],
    outputs: ['click']
})

@View({
    directives: [NgFor, ProductRow],
    templateUrl: 'app/product-list/product-list.html'
})

export default class ProductsList {
    productList: Product[];
    click: EventEmitter<Product>;

    constructor () {
        this.click = new EventEmitter();
    }

    clicked (product: Product): void {
        this.click.emit(product);
    }
}
