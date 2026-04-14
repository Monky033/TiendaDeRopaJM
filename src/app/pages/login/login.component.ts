import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  otp = '';
  otpSent = false;
  loggedIn = false;
  error = '';

  // OTP simulado
  private MOCK_OTP = '123456';

  onSubmit(): void {
    if (this.email) {
      this.otpSent = true;
      this.error = '';
      console.log('OTP enviado a:', this.email, '→ código simulado:', this.MOCK_OTP);
    }
  }

  onVerify(): void {
    if (this.otp === this.MOCK_OTP) {
      this.loggedIn = true;
      this.error = '';
    } else {
      this.error = 'Código incorrecto. Intentá con 123456.';
    }
  }
}
