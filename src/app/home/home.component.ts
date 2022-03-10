import { Component, OnInit, HostBinding, Inject, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateY(0%)',
        opacity: 1,
        // backgroundColor: 'blue'
      })),
      state('closed', style({
        transform: 'translateY(5%)',
        // height: '10px',
        opacity: 0,
        // backgroundColor: 'blue'
      })),
      transition('closed => open', [
        animate('3s ease-in-out'),
      ]),
      transition('open => closed', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isOpen = false;
  images = ['graduation_1.jpg', 'graduation_2.jpg', 'graduation_3.jpg'].map((n) => `assets/images/${n}`);

  constructor() { }
  @Inject(DOCUMENT) private document: Document
  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll(){
    console.log("HOME", window.scrollY)
    if (window.scrollY > 0){
      this.isOpen = true;
    }
    else {
      this.isOpen = false;
    }
  }


}
