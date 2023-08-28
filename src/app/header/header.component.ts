import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {  
  isMenuOpen = false;

  toggleMenu() : void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isSticky = false;
  isLargeScreen = false;

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isLargeScreen = window.innerWidth > 1180;
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    const scrollPosition = window.scrollY;
    if (this.isLargeScreen && scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
