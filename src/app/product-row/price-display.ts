import {
    Component
} from 'angular2/core';

@Component({
    inputs: ['price'],
    selector: 'price-display',
    template: `<div class="price-display">{{ price }}</div>`
})

export default class PriceDisplay {
    price: number;
}
