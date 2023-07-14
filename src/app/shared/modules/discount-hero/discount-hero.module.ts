import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountHeroComponent } from './discount-hero.component';

@NgModule({
  declarations: [DiscountHeroComponent],
  imports: [
    CommonModule,
  ],
  exports: [DiscountHeroComponent],
})
export class DiscountHeroModule {}
