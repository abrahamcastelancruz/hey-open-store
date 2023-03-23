import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SidebarMenuModule } from '../sidebar-menu/sidebar-menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SidebarMenuModule,
    RouterModule
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
