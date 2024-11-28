import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  categories = [
    { name: 'Crustacés', icon: 'assets/img/crustaces.png' },
    { name: 'Poisson', icon: 'fish-outline' },
    { name: 'Coquillage', icon: 'assets/img/coquillage.png' },
    { name: 'Autres', icon: 'ellipsis-horizontal-outline' },
  ];

  products: any[] = [];
  cartItemCount: number = 0; // Compteur d'articles dans le panier
  private cartItemCountSubscription: Subscription | null = null; // Initialiser à null

  constructor(
    private router: Router,
    private http: HttpClient,
    private cartService: CartService // Injection du service de panier
  ) {}

  ngOnInit() {
    this.loadProducts();
    // S'abonner au sujet du compteur d'articles
    this.cartItemCountSubscription = this.cartService
      .getCartItemCountObservable()
      .subscribe((count) => {
        this.cartItemCount = count; // Mettre à jour le compteur d'articles du panier
      });
  }

  ngOnDestroy() {
    // Vérifier si l'abonnement existe avant de se désabonner
    if (this.cartItemCountSubscription) {
      this.cartItemCountSubscription.unsubscribe(); // Désabonnement propre
    }
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
