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
        transform: 'translateY(0)',
        height: '200px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('closed', style({
        transform: 'translateY(5%)',
        height: '200px',
        opacity: 0,
        backgroundColor: 'blue'
      })),
      transition('closed => open', [
        animate('500ms ease-in-out'),
      ]),
      transition('open => closed', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isOpen = true;
  images = ['graduation_1.jpg', 'graduation_2.jpg', 'graduation_3.jpg'].map((n) => `assets/images/${n}`);

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll(){
    console.log(window.scrollY)
    if (window.scrollY > 2){
      this.isOpen = true;
    }
  }


}
