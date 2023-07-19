import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
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
    },
    {
      image: "assets/images/hey-open-red.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Red",
      link: "https://buy.stripe.com/5kAeW48dx0Yx9YkaEJ"
    },
    {
      image: "assets/images/hey-open-serve.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Serve",
      link: "https://buy.stripe.com/3csbJSalF36FfiEfZ4"
    },
    {
      image: "assets/images/hey-open-play.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Play",
      link: "https://buy.stripe.com/eVacNW8dxePndaw9AH"
    },
    {
      image: "assets/images/hey-open-ball.avif",
      price: "$800.00 MXN",
      name: "Hey! Open Ball",
      link: "https://buy.stripe.com/eVa7tCeBVcHf4E0008"
    },
  ]
}
