import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { SidebarMenuModule } from '../sidebar-menu/sidebar-menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    SidebarMenuModule,
    RouterModule
  ],
  exports: [HeroComponent],
})
export class HeroModule {}
