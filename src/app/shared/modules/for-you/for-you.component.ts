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

  public products = [
    {
      image: "assets/images/hey-open-face-red.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Face Red",
      link: "https://buy.stripe.com/aEUdS0ctN4aJ7Qc144"
    },
    {
      image: "assets/images/hey-open-tie-break.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Tie Break",
      link: "https://buy.stripe.com/8wMdS09hB6iR1rO9AB"
    },
    {
      image: "assets/images/hey-open-match-point.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Match Point",
      link: "https://buy.stripe.com/4gwdS02Td0Yx1rO3ce"
    },
    {
      image: "assets/images/hey-open-smash.avif",
      price: "$800.00 MXN",
      name: "Hey! Open SMASH",
      link: "https://buy.stripe.com/fZecNW2TddLj0nK4gj"
    },
    {
      image: "assets/images/hey-open-black.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Black",
      link: "https://buy.stripe.com/dR6g0851l7mV4E06os"
    }
  ]


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
          perView: 1.3,
          spacing: 30,
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
