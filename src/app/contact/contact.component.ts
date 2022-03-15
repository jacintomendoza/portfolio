import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  email = "jacinto.josh.mendoza@gmail.com"
  formGroup: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
    }, {})
  }

  submit(){

  }
  openSnackBar() {
    this._snackBar.open("Copied!", "Close");
  }

}
