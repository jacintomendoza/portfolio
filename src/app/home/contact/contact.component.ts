import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from './contact.model';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isUploadingContact: boolean = false;
  newContact: Contact = { id: '', fullName: '', email: '', comment: '' }
  
  email = "jacinto.josh.mendoza@gmail.com"
  formGroup: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private profileService: ProfileService
    ) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
    }, {})
  }

  submit(){
    console.log("Foo");
    this.isUploadingContact = true;
    this.newContact = this.formGroup.value;
    this.profileService.createContact(this.newContact).subscribe((payload) => {
      this.isUploadingContact = false;
      this._snackBar.open("Sent!", "Close");
    })
  }
  openSnackBar() {
    this._snackBar.open("Copied!", "Close");
  }

}
