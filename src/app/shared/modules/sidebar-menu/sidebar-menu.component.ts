import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  @Output() hideSidebarEmit = new EventEmitter<boolean>();


  public hideSidebarMenu() {
    this.hideSidebarEmit.emit(false);
  }

}
