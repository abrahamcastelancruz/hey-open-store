import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  @Output() hideSidebarEmit = new EventEmitter<boolean>();

  public isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (window.localStorage.getItem('user')) {
      this.isLoggedIn = true;
    }
  }


  public hideSidebarMenu() {
    this.hideSidebarEmit.emit(false);
  }

}
