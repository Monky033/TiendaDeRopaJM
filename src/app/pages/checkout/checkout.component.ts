import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service'; // Nuevo servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total = 0;
  loading = false;
  orderPlaced = false;
  caeNumber = ''; // Para mostrar el comprobante real

  // Datos extendidos para ARCA
  formData = {
    name: '',
    email: '',
    address: '',
    doc_tipo: '96', // 96 = DNI, 80 = CUIT (según tablas de AFIP)
    doc_nro: '',
    condicion_iva: 'CF' // Consumidor Final
  };

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  onSubmit(): void {
    if (this.cartItems.length === 0) return;

    this.loading = true;

    // Estructura de datos para el WSFE (Facturación Electrónica)
    const pedido = {
      cliente: this.formData,
      items: this.cartItems,
      total: this.total,
      fecha: new Date().toISOString()
    };

    this.orderService.createOrder(pedido).subscribe({
      next: (res) => {
        this.loading = false;
        this.orderPlaced = true;
        this.caeNumber = res.cae; // El backend devuelve el CAE de ARCA
        this.cartService.clearCart();
        console.log('Factura aprobada por ARCA:', res);
      },
      error: (err) => {
        this.loading = false;
        alert('Error al procesar la factura con ARCA. Intente nuevamente.');
      }
    });
  }
}