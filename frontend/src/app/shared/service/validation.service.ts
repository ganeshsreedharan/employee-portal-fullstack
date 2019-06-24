
import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidationService {

    static checkLimit(min: number, max: number): ValidatorFn {
      return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
          return { range : true };
        }
        return null;
      };
    }
}
