import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
