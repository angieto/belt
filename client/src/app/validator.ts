import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       const formGroup = AC.parent;
       if (formGroup) {
            const passwordControl = formGroup.get('Password'); // to get value in input tag
            const confirmPasswordControl = formGroup.get('Confirm'); // to get value in input tag

            if (passwordControl && confirmPasswordControl) {
                const password = passwordControl.value;
                const confirmPassword = confirmPasswordControl.value;
                if (password !== confirmPassword) { 
                    return { matchPassword: true };
                } else {
                    return null;
                }
            }
       }
       return null;
    }
}