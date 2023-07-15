import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountHeroComponent } from './discount-hero.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DiscountHeroComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DiscountHeroComponent],
})
export class DiscountHeroModule {}
