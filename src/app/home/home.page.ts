import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = [
    { name: 'Langoustine', icon: 'shrimp-outline' },
    { name: 'Poisson', icon: 'fish-outline' },
    { name: 'Coquillage', icon: 'shell-outline' },
    { name: 'Autres', icon: 'ellipsis-horizontal-outline' },
  ];

  products = [
    {
      image: 'assets/img/sole.jpg',
      name: 'Sole',
      description: '150g à 450g',
      price: '10,00€'
    },
    {
      image: 'assets/img/dorade.jpg',
      name: 'Dorade',
      description: '200g à 500g',
      price: '8,00€'
    },
  ];

  constructor() {}
}
