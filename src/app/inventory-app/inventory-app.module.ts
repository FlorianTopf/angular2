import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InventoryApp} from './inventory-app';
import {ProductsList} from '../product-list/product-list';
import {ProductRow} from '../product-row/product-row';
import {ProductImage} from '../product-row/product-image';
import {ProductDepartment} from '../product-row/product-department';
import {PriceDisplay} from '../product-row/price-display';

@NgModule({
    imports: [CommonModule],
    declarations: [
        InventoryApp,
        ProductsList,
        ProductRow,
        ProductImage,
        ProductDepartment,
        PriceDisplay,
    ],
    exports: [InventoryApp],
})
export class InventoryAppModule {
    constructor () {
        console.info('InventoryApp Module Mounted Successfully');
    }
}
