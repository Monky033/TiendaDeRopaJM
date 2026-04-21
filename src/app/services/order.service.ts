import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // órdenes/ARCA
  private API_URL = 'http://localhost:8000/api/orders/';

  constructor(private http: HttpClient) {}

  /**
   * Envía la orden al backend. 
   * El interceptor adjuntará el Token JWT automáticamente.
   */
  createOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.API_URL}create/`, orderData);
  }
}