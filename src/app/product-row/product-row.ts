import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Product} from './product';

@Component({
    host: { 'class': 'sixteen wide column' },
    selector: 'product-row',
    templateUrl: 'product-row.html',
})
export class ProductRow {
    @Input() public product: Product;
    @Output() public onSelect: EventEmitter<Product>;

    constructor() {
        this.onSelect = new EventEmitter<Product>();
    }

    public clicked(): void {
        this.onSelect.emit(this.product);
    }
}
