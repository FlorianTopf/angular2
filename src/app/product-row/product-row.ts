import {
    Component,
    View,
    EventEmitter
} from 'angular2/core';

import Product from './product';
import ProductImage from './product-image';
import PriceDisplay from './price-display';
import ProductDepartment from './product-department';

@Component({
    selector: 'product-row',
    inputs: ['product'],
    outputs: ['onSelect'],
    host: { 'class': 'item' },
})

@View({
    directives: [ProductImage, ProductDepartment, PriceDisplay],
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
