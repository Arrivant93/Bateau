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

  addToCart(product: any, quantity: number = 1) {
    // Vérifier si le produit avec la même configuration existe déjà
    const existingProduct = this.cart.find(
      (item) => item.id === product.id && item.quantity === quantity
    );
  
    if (existingProduct) {
      // Si le produit existe déjà, augmenter uniquement la quantité
      existingProduct.quantity += quantity;
    } else {
      // Sinon, ajouter le produit comme une nouvelle ligne
      this.cart.push({ ...product, quantity });
    }
  
    // Mettre à jour les sujets réactifs
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
  removeItem(product: any) {
    // Supprimer l'élément correspondant
    this.cart = this.cart.filter(cartItem => cartItem.id !== product.id);
    
    // Mettre à jour les sujets réactifs
    this.updateCartData();
  }
}
