import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
    
    // S'abonner au flux des modifications du total
    this.cartService.getCartTotalObservable().subscribe(total => {
      this.total = total; // Mise à jour du total dès qu'il change
    });

    // S'abonner au flux des changements du panier
    this.cartService.getCartItemCountObservable().subscribe(cartItemCount => {
      // Si nécessaire, vous pouvez également gérer le nombre d'articles ici
    });
  }

  loadCart() {
    this.cart = this.cartService.getCart(); // Charger les produits du panier
  }

  removeItem(item: any) {
    // Retirer le produit du panier
    this.cartService.removeItem(item);
  }
}
