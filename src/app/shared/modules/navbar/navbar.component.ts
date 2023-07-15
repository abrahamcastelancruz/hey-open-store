import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hey-open-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public showSidebar = false;

  public isLoggedIn: boolean = false;

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('user')) {
      this.isLoggedIn = true;
    }
  }

  public navigateToLogin(): void {
    this.router.navigateByUrl('/login')
  }
}
