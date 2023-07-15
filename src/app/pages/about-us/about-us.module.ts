import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    FooterModule
  ]
})
export class AboutUsModule {}
