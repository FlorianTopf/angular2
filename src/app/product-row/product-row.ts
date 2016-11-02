import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Product} from './product';

@Component({
    host: { 'class': 'item' },
    selector: 'product-row',
    templateUrl: 'app/product-row/product-row.html',
})
export class ProductRow {
    @Input() product: Product;

    @Output() onSelect: EventEmitter<Product>;

    constructor () {
        this.onSelect = new EventEmitter();
    }

    clicked (): void {
        this.onSelect.emit(this.product);
    }
}
