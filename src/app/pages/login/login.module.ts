import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SidebarMenuModule } from '../../shared/modules/sidebar-menu/sidebar-menu.module';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SidebarMenuModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
