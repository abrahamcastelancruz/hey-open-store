import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DiscountHeroModule } from 'src/app/shared/modules/discount-hero/discount-hero.module';
import { ForYouModule } from 'src/app/shared/modules/for-you/for-you.module';
import { HeroModule } from 'src/app/shared/modules/hero/hero.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    ForYouModule,
    DiscountHeroModule,
    FooterModule
  ]
})
export class HomeModule {}
