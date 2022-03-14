import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  images = ['graduation_1.jpg', 'graduation_2.jpg', 'graduation_3.jpg'].map((n) => `assets/images/${n}`);

  constructor() { }

  ngOnInit(): void {
  }

}
