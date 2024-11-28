import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';

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
  products: any[] = []; 
  suggestedProducts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  
  private loadProducts() {
    this.http.get<any[]>('assets/data/products.json').subscribe({
      next: (data) => {
        this.products = data;
        this.initializeProductDetails();
      },
    });
  }

  
  private initializeProductDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productId = +id;
      this.product = this.products.find((p) => p.id === this.productId);

      if (this.product) {
        this.totalPrice = this.product.price * this.quantity;

        
        this.suggestedProducts = this.products.filter(
          (p) => p.id !== this.productId
        );
      }
    } else {
      console.error('Aucun ID de produit trouvé dans l\'URL');
    }
  }

  
  increaseQuantity() {
    this.quantity++;
    this.updateTotalPrice();
  }

  
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  
  updateTotalPrice() {
    if (this.product) {
      this.totalPrice = this.product.price * this.quantity;
    }
  }

  
  goBack() {
    this.router.navigate(['/home']);
  }

  
  onProductClick(product: any) {
    this.router.navigate(['/product-details', product.id]);
  }
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Produit ajouté au panier !');
  }
}
