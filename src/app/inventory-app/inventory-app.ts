import {
    Component,
    View
} from 'angular2/core';

import Product from '../product-row/product';
import ProductList from '../product-list/product-list';

@Component({
    selector: 'inventory-app'
})

@View({
    directives: [ProductList],
    templateUrl: 'app/inventory-app/inventory-app.html'
})

export default class InventoryApp {
    products: Product[];

    constructor () {
        console.info('InventoryApp Component Mounted Successfully');

        this.products = [];

        this.products.push(new Product(
            '104544-2', 'Nykee Running Shoes',
            'http://media.kohls.com.edgesuite.net/is/image/kohls/1811809?wid=882&hei=882&op_sharpen=1',
            ['Men', 'Shoes', 'Running Shoes'],
            109.99
        ));

        this.products.push(new Product(
            '187611-0', 'South Face Jacket',
            'https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg',
            ['Women', 'Apparel', 'Jackets & Vests'],
            238.99
        ));

        this.products.push(new Product(
            '443102-9', 'Addeds Active Hat',
            'http://i.ebayimg.com/00/s/NDI5WDUwMA==/z/bUYAAOxycmBSsRxU/$_35.JPG?set_id=2',
            ['Men', 'Accessories', 'Hats'],
            29.99
        ));
    }

    productClicked (product: Product): void {
        // FIXME propagates event first, why? (see view)
        console.log(`Product clicked: ${JSON.stringify(product)}`);
    }
}
