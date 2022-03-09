import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio-frontend';
  opened = false;
  toolbar_variable=false;

  constructor(@Inject(DOCUMENT) private document: Document) { }
   
  // https://stackoverflow.com/questions/59148204/angular-8-hostlistenerwindowscroll-not-working
  // Mat-toolbar adjustments
  @HostListener("window:scroll", [])
  onWindowScroll(){
    console.log(window.scrollY);
    if (window.scrollY > 1000){
      this.toolbar_variable=true;
    }
    else {
      this.toolbar_variable=false;
    }
  }


}
