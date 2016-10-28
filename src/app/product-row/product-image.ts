import {Component, Input} from '@angular/core';

import {Product} from './product';

@Component({
    host: { 'class': 'ui small' },
    selector: 'product-image',
    template: `<img class="product-image" [src]="product.imageUrl">`,
})
export class ProductImage {
    @Input()
    product: Product;
}
