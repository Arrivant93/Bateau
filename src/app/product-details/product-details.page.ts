import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  productId: number | undefined;
  product: any;
  quantity: number = 1;
  totalPrice: number = 0;

  
  products = [
    {
      id: 1,
      image: 'assets/img/sole.jpg',
      name: 'Sole',
      description: '150g à 450g',
      price: 10.00
    },
    {
      id: 2,
      image: 'assets/img/dorade.jpg',
      name: 'Dorade',
      description: '200g à 500g',
      price: 8.00
    },
  ];

  
  suggestedProducts: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Récupérer l'ID depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productId = +id;
      this.product = this.products.find(p => p.id === this.productId);

      // Initialiser le prix total en fonction du prix unitaire et de la quantité
      if (this.product) {
        this.totalPrice = this.product.price * this.quantity;

        // Remplir les produits similaires, en excluant le produit actuel
        this.suggestedProducts = this.products.filter(p => p.id !== this.productId);
      }
    } else {
      console.error('Aucun ID de produit trouvé dans l\'URL');
    }
  }

  // Fonction pour augmenter la quantité
  increaseQuantity() {
    this.quantity++;
    this.updateTotalPrice();
  }

  // Fonction pour diminuer la quantité
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  // Met à jour le prix total en fonction de la quantité
  updateTotalPrice() {
    if (this.product) {
      this.totalPrice = this.product.price * this.quantity;
    }
  }

  // Naviguer vers la page précédente
  goBack() {
    this.router.navigate(['/home']);
  }

  // Naviguer vers la page des détails du produit sélectionné
  onProductClick(product: any) {
    this.router.navigate(['/product-details', product.id]);
  }
}
