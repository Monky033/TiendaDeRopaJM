import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 1. Obtenemos el token del localStorage
    const token = localStorage.getItem('access_token');

    // 2. Si el token existe, clonamos la petición y le agregamos el header
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }

    // 3. Si no hay token, la petición sigue su curso normal
    return next.handle(request);
  }
}