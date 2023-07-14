import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountHeroComponent } from './discount-hero.component';

describe('DiscountHeroComponent', () => {
  let component: DiscountHeroComponent;
  let fixture: ComponentFixture<DiscountHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
