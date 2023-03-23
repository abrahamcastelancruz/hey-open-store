import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { SidebarMenuModule } from '../sidebar-menu/sidebar-menu.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    SidebarMenuModule
  ],
  exports: [HeroComponent],
})
export class HeroModule {}
