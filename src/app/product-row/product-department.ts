import {Component, Input} from '@angular/core';

import {Product} from './product';

@Component({
    selector: 'product-department',
    template:
        `<div class="ui breadcrumb">
            <div class="section" *ngFor="let name of product.department; let i=index">
                {{ name }}
                <div class="divider">{{i < (product.department.length-1) ? '/' : ''}}</div>
            </div>
        </div>`,
})
export class ProductDepartment {
    @Input() public product: Product;
}
