import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isMenuOpen = false;

  toggleMenu() : void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
