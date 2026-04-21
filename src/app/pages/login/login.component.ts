import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Asegúrate de crear este servicio

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Propiedades vinculadas al HTML mediante [(ngModel)]
  email: string = '';
  otp: string = '';
  
  // Estados de control de la UI
  otpSent: boolean = false;
  loggedIn: boolean = false;
  loading: boolean = false;
  error: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  /**
   * PASO 1: Enviar Email al Backend para generar OTP
   */
  onSubmit(): void {
    if (this.email) {
      this.loading = true;
      this.error = '';

      // Llamada al servicio real (reemplaza la lógica simulada)
      this.authService.requestOtp(this.email).subscribe({
        next: (response) => {
          this.otpSent = true;
          this.loading = false;
          console.log('OTP enviado correctamente a:', this.email);
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Hubo un error al enviar el código. Reintente más tarde.';
          console.error(err);
        }
      });
    }
  }

  /**
   * PASO 2: Verificar el código OTP y obtener el Token JWT
   */
  onVerify(): void {
    if (this.otp) {
      this.loading = true;
      this.error = '';

      this.authService.login(this.email, this.otp).subscribe({
        next: (tokens) => {
          this.loading = false;
          this.loggedIn = true;
          
          // El servicio AuthService debería guardar los tokens en localStorage/sessionStorage
          console.log('Sesión iniciada con éxito');
          
          // Opcional: Redirección automática después de 2 segundos si no se usa el botón del HTML
          // setTimeout(() => this.router.navigate(['/']), 2000);
        },
        error: (err) => {
          this.loading = false;
          // Si el backend devuelve un 401 o 400 por código inválido
          this.error = 'El código ingresado es incorrecto o ya expiró.';
        }
      });
    }
  }

  /**
   * Permite al usuario volver atrás y corregir su email
   */
  resetForm(): void {
    this.otpSent = false;
    this.otp = '';
    this.error = '';
  }
}