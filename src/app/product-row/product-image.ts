import {Component, Input} from '@angular/core';

import {Product} from './product';

@Component({
    host: { 'class': 'six wide column' },
    selector: 'product-image',
    template: `<img class="ui medium bordered image" [src]="product.imageUrl">`,
})
export class ProductImage {
    @Input() public product: Product;
}
