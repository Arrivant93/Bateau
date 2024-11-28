import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  private cartTotalSubject = new BehaviorSubject<number>(0);

  constructor() {}

  // Retourner l'observable du total
  getCartItemCountObservable() {
    return this.cartItemCountSubject.asObservable();
  }

  // Retourner l'observable du nombre d'articles
  getCartTotalObservable() {
    return this.cartTotalSubject.asObservable();
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    // Notifier les abonnés des changements
    this.updateCartData();
  }

  getCartItemCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  // Met à jour le nombre d'articles et le total
  private updateCartData() {
    this.cartItemCountSubject.next(this.getCartItemCount());
    this.cartTotalSubject.next(this.getCartTotal());
  }

  // Retirer un produit du panier
  removeItem(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    this.updateCartData(); // Mettre à jour les données après suppression
  }
}
