import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = [
    { name: 'Crustacés', icon: 'assets/img/crustaces.png' },
    { name: 'Poisson', icon: 'fish-outline' },            
    { name: 'Coquillage', icon: 'assets/img/coquillage.png' },          
    { name: 'Autres', icon: 'ellipsis-horizontal-outline' } 
  ];

  products = [
    {
      id: 1, 
      image: 'assets/img/sole.jpg',
      name: 'Sole',
      description: '150g à 450g',
      price: '10,00€'
    },
    {
      id: 2, 
      image: 'assets/img/dorade.jpg',
      name: 'Dorade',
      description: '200g à 500g',
      price: '8,00€'
    },
  ];
  

  constructor(private router: Router) {}


  
  onProductClick(product: any) {
    this.router.navigate(['/product-details', product.id]);
  }
  
}
