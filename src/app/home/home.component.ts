import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ['graduation_1.jpg', 'graduation_2.jpg', 'graduation_3.jpg'].map((n) => `assets/images/${n}`);

  // https://picsum.photos/id/${n}/900/500

  constructor() { }

  ngOnInit(): void {
  }

}
