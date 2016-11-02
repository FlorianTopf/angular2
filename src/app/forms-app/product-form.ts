import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {skuValidator} from './validators';

@Component({
    selector: 'sku-form',
    templateUrl: 'app/forms-app/product-form.html',
})
export class ProductForm {
    myForm: FormGroup;
    sku: AbstractControl;
    productName: string;

    constructor (fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.compose([Validators.required, skuValidator])],
            'productName':  ['', Validators.required],
        });

        this.sku = this.myForm.controls['sku'];

        this.sku.valueChanges.subscribe(
            (value: string) => {
                console.log('sku changed to:', value);
            }
        );
        this.myForm.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to:', form);
            }
        );
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);
    }
}
