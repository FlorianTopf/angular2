import {FormControl} from '@angular/forms';

type BooleanMap = { [s: string]: boolean }

export function skuValidator(control: FormControl): BooleanMap {
    if (!control.value.match(/^123/)) {
        return {invalidSku: true};
    }
}
