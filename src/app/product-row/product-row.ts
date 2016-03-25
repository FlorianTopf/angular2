import {
    Component,
    EventEmitter
} from 'angular2/core';

import Product from './product';
import ProductImage from './product-image';
import PriceDisplay from './price-display';
import ProductDepartment from './product-department';

@Component({
    directives: [ProductImage, ProductDepartment, PriceDisplay],
    host: { 'class': 'item' },
    inputs: ['product'],
    outputs: ['onSelect'],
    selector: 'product-row',
    templateUrl: 'app/product-row/product-row.html'
})

export default class ProductRow {
    product: Product;
    onSelect: EventEmitter<Product>;

    constructor () {
        this.onSelect = new EventEmitter();
    }

    clicked (): void {
        this.onSelect.emit(this.product);
    }
}
