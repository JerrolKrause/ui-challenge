import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validator function to check if the control's value contains only numbers.
 * @returns A validation error if the control value is not a valid number, otherwise null.
 */
export function numbersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !/^\d+$/.test(value)) {
      // If the control value is not empty and not purely numeric, return an error.
      return { numbersOnly: true };
    }
    // If the control value passes the numeric check, return null (no error).
    return null;
  };
}
