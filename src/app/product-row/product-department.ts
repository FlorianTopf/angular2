import {
    Component
} from 'angular2/core';

import {
    NgFor,
    NgIf
} from 'angular2/common';

import Product from './product';

@Component({
    directives: [NgFor, NgIf],
    inputs: ['product'],
    selector: 'product-department',
    template:
        `<div class="product-department">
            <span *ngFor="#name of product.department; #i=index">
                <a href="#">{{ name }}</a>
                <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
            </span>
        </div>`
})

export default class ProductDepartment {
    product: Product;
}
