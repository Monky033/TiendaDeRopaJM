import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.cartItems = this.cartService.getItems();
      this.total = this.cartService.getTotal();
    });
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  increase(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  decrease(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  remove(id: number): void {
    this.cartService.removeFromCart(id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
