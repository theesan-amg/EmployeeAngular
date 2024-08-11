import { Component } from '@angular/core';
import {Router, RouterLinkWithHref} from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  onLogout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
