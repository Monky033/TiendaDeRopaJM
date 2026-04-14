import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  showToast = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.featuredProducts = this.productService.getProducts().slice(0, 3);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 2500);
  }
}
