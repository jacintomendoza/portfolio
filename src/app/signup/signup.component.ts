import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hide = true;
  hide2 = true;
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },{validator: this.checkPasswords});
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }

  // https://stackoverflow.com/questions/64109148/password-match-validation-in-reactive-form-in-angular
  checkPasswords(group: FormGroup) {
        const pass = group.controls['password'].value;
        const confirmPass = group.controls['confirmPassword'].value;

        return pass === confirmPass ? null : { notSame: true };
    }

  submit() {
  }

}
