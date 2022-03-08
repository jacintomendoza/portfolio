import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Account } from '../account.model';

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
  newAccount: Account = { id: 0, firstName: '', lastName: '', email: '', password: '' };

  constructor(
    private _formBuilder: FormBuilder,
    private accountService: AccountService) {}

  accounts: Account[] = [];

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
    console.log(this.firstFormGroup.value);
    this.newAccount = this.firstFormGroup.value;
    
    this.accountService.createAccount(this.newAccount).subscribe((payload) => {
    });
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(payload => {
      this.accounts = payload;
    })
  }

}
