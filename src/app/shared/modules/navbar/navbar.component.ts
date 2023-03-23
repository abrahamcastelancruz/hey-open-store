import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hey-open-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public showSidebar = false;

  constructor(private readonly router:Router) { }

  public navigateToLogin(): void {
    this.router.navigateByUrl('/login')
  }
}
