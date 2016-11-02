import {Component, EventEmitter, Input} from '@angular/core';

import {Product} from '../product-row/product';

@Component({
    selector: 'products-list',
    outputs: ['onProductSelected'],
    templateUrl: 'app/product-list/product-list.html',
})
export class ProductsList {
    @Input('products') productList: Product[];

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
