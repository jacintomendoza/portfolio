import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Account } from '../account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  hide = true;
  hide2 = true;
  newAccount: Account = { id: 0, firstName: '', lastName: '', email: '', password: '' };
  isLoadingAccounts: boolean = false;
  isUploadingAccount: boolean = false;
  isUploadingAccount2: boolean = true;



  constructor(
    private _formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router) {}

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
    this.isUploadingAccount = true;
    this.newAccount = this.firstFormGroup.value;
    this.accountService.createAccount(this.newAccount).subscribe((payload) => {
      this.isUploadingAccount = false;
      this.router.navigate(['/home']);
    });
  }

  getAccounts() {
    this.isLoadingAccounts = true;
    this.accountService.getAccounts().subscribe(payload => {
      this.isLoadingAccounts = false;
      this.accounts = payload;
    })
  }

}
