import {
    Component,
    EventEmitter
} from 'angular2/core';

import {
    NgFor
} from 'angular2/common';

import Product from '../product-row/product';
import ProductRow from '../product-row/product-row';

@Component({
    directives: [NgFor, ProductRow],
    inputs: ['productList: products'],
    selector: 'products-list',
    outputs: ['onProductSelected'],
    templateUrl: 'app/product-list/product-list.html'
})

export default class ProductsList {
    productList: Product[];

    currentProduct: Product;

    onProductSelected: EventEmitter<Product>;

    constructor () {
        this.onProductSelected = new EventEmitter();
    }

    clicked (product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected (product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }

        return product.sku === this.currentProduct.sku;
    }
}
