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
    outputs: ['click']
})

@View({
    directives: [ProductImage, ProductDepartment, PriceDisplay],
    templateUrl: 'app/product-row/product-row.html'
})

export default class ProductRow {
    product: Product;
    click: EventEmitter<Product>;

    constructor () {
        this.click = new EventEmitter();
    }

    clicked (): void {
        this.click.emit(this.product);
    }
}
