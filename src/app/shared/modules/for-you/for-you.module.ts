import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForYouComponent } from './for-you.component';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [ForYouComponent],
  imports: [
    CommonModule,
    ProductCardModule
  ],
  exports: [ForYouComponent],
})
export class ForYouModule {}
