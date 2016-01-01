import {
    Component
} from 'angular2/core';

import Product from './product';

@Component({
    host: { 'class': 'ui small' },
    inputs: ['product'],
    selector: 'product-image',
    template: `<img class="product-image" [src]="product.imageUrl">`
})

export default class ProductImage {
    product: Product;
}
