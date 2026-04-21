import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Cambia esta URL por la de tu backend de Django
  private API_URL = 'http://localhost:8000/api/token/'; 

  constructor(private http: HttpClient) {}

  // Solicita el OTP
  requestOtp(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}request-otp/`, { email });
  }

  //  Verificar OTP y obtiene Tokens
  login(email: string, otp: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}verify-otp/`, { email, otp }).pipe(
      tap(res => {
        // Guardamos los tokens 
        localStorage.setItem('access_token', res.access);
        localStorage.setItem('refresh_token', res.refresh);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}