import { Directive } from '@angular/core';
import { ValidatorFn } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms/src/model';

@Directive({
  selector: '[appForbiddenName]'
})
export class ForbiddenNameDirective {

  constructor() { }

}

export function forbiddenNameValidator(nameRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRegex.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}