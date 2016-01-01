import {
    Component,
    View
} from 'angular2/core';

import Product from './product';

@Component({
    selector: 'product-image',
    inputs: ['product']
})

@View({
    template: `<img class="product-image" [src]="product.imageUrl">`
})

export default class ProductImage {
    product: Product;
}
