import {Component, Input} from '@angular/core';

@Component({
    host: { 'class': 'four wide column' },
    selector: 'price-display',
    template: `<h3 class="ui header">EUR {{ price }}</h3>`,
})
export class PriceDisplay {
    @Input() public price: number;
}
