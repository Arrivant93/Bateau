import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories = [
    { name: 'Crustacés', icon: 'assets/img/crustaces.png' },
    { name: 'Poisson', icon: 'fish-outline' },
    { name: 'Coquillage', icon: 'assets/img/coquillage.png' },
    { name: 'Autres', icon: 'ellipsis-horizontal-outline' },
  ];

  products: any[] = []; 

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
  }


  private loadProducts() {
    this.http.get<any[]>('assets/data/products.json').subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }

  onProductClick(product: any) {
    this.router.navigate(['/product-details', product.id]);
  }
}
