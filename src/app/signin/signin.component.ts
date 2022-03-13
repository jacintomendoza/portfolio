import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Account } from '../account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  checked = false;
  form: FormGroup;
  isLoadingAccounts: boolean = false;
  isUploadingAccount: boolean = false;
  isUploadingAccount2: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router) {}

  accounts: Account[] = [];

  ngOnInit() {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    },);
  }

  submit() {
    if (this.form.valid) {
      // this.submitEM.emit(this.form.value);
    }

  }
  check() {
    this.checked = !this.checked;
  }

  // @Output() submitEM = new EventEmitter();

  // getAccounts() {
  //   this.isLoadingAccounts = true;
  //   this.accountService.getAccounts().subscribe(payload => {
  //     this.isLoadingAccounts = false;
  //     this.accounts = payload;
  //   })
  // }

}
