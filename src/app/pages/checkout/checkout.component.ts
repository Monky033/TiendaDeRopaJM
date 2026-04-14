import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;
  orderPlaced = false;

  formData = {
    name: '',
    email: '',
    address: ''
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  onSubmit(): void {
    // Simulación de pago con ARCA (backend)
    console.log('Enviando pedido a ARCA...', {
      customer: this.formData,
      items: this.cartItems,
      total: this.total
    });

    // Simular respuesta exitosa
    setTimeout(() => {
      this.orderPlaced = true;
      this.cartService.clearCart();
    }, 800);
  }
}
