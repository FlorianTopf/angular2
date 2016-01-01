import {
    Component,
    View
} from 'angular2/core';

@Component({
    selector: 'price-display',
    inputs: ['price']
})

@View({
    template: `<div class="price-display">{{ price }}</div>`
})

export default class PriceDisplay {
    price: number;
}
