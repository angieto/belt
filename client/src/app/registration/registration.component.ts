import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ForbiddenNameValidator } from './name.validator';
import { PasswordValidator } from './password.validator';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;

    constructor(private fb: FormBuilder, private _httpService: HttpService) { }

    ngOnInit() {
        this.registrationForm = this.fb.group({
            userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/password/)]],
            password: [''],
            confirmPassword: [''],
            email: [''],
            location: [''],
        }, { validator: PasswordValidator });
  
        this.registrationForm.get('subscribe').valueChanges
            .subscribe(checkedValue => {
            const email = this.registrationForm.get('email');
            if (checkedValue) {
                email.setValidators(Validators.required);
            } else {
                email.clearValidators();
            }
            email.updateValueAndValidity();
        });
    }
  
    get userName() {
        return this.registrationForm.get('userName');
    }
  
    get email() {
        return this.registrationForm.get('email');
    }
  
    onSubmit() {
        console.log(this.registrationForm.value);
        // this._httpService.register(this.registrationForm.value)
        //     .subscribe(res => console.log('Success!', res), err => console.error('Error!', err)
        // );
    }

}
