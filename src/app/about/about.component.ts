import { Component, OnInit, HostBinding, Inject, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {
  isOpen = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll(){
    console.log(window.scrollY);
    if (window.scrollY > 2){
      this.isOpen = true;
    }
    else {
      this.isOpen = false;
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
