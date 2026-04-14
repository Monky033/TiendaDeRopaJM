import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, CartItem } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  getItems(): CartItem[] {
    return this.cartItems;
  }

  getItemCount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  addToCart(product: Product): void {
    const existing = this.cartItems.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(i => i.product.id !== productId);
    this.cartSubject.next([...this.cartItems]);
  }

  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      item.quantity++;
      this.cartSubject.next([...this.cartItems]);
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
        return;
      }
      this.cartSubject.next([...this.cartItems]);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
}
