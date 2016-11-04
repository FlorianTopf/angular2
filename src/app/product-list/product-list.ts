import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Product} from '../product-row/product';

@Component({
    selector: 'products-list',
    templateUrl: 'app/product-list/product-list.html',
})
export class ProductsList {
    @Input('products') public productList: Product[];
    @Output() public onProductSelected: EventEmitter<Product>;

    private currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter<Product>();
    }

    public clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    public isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }

        return product.sku === this.currentProduct.sku;
    }
}
