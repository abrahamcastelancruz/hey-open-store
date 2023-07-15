import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';
import { ProductCardModule } from 'src/app/shared/modules/product-card/product-card.module';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FooterModule,
    ProductCardModule
  ]
})
export class StoreModule {}
