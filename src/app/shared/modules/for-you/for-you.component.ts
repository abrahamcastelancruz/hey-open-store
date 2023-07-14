import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements AfterViewInit {
  @ViewChild("sliderPromoRef") sliderRef: ElementRef<HTMLElement>

  public slider: KeenSliderInstance = null;
  public currentSlide: number = 0;
  public dotHelper: Array<Number> = [];


  constructor(
  ) { }
  ngAfterViewInit(): void {
    this._keenSlider();
  }

  private _keenSlider() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        breakpoints: {
          "(min-width: 768px)": {
            slides: { perView: 3, spacing: 5 },
          },
          "(min-width: 1140px)": {
            slides: { perView: 5},
          },
        },
        slides: {
          perView: 2,
          spacing: 5,
          origin: 'auto',
        },
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
