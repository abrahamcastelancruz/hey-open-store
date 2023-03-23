import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForYouModule } from 'src/app/shared/modules/for-you/for-you.module';
import { HeroModule } from 'src/app/shared/modules/hero/hero.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    ForYouModule
  ]
})
export class HomeModule {}
