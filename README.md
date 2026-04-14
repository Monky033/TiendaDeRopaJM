# 🛍️ StyleShop — E-commerce Angular

Proyecto e-commerce desarrollado con Angular 17 + Bootstrap 5 para la materia de desarrollo web.

---

## ¿Qué hicimos?

Desarrollamos una tienda online de ropa con las siguientes secciones:

- **Home** — Hero + productos destacados
- **Shop** — Catálogo completo en grilla responsiva
- **Detalle de Producto** — Vista individual con descripción
- **Carrito** — Lista de productos, cantidades y total
- **Checkout** — Formulario de datos + simulación de pago ARCA
- **Login** — Autenticación simulada con OTP

---

## ¿Cómo funciona?

### Instalación

```bash
npm install
ng serve
```

La app corre en `http://localhost:4200`

### Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   └── navbar/          ← Navbar compartida
│   ├── pages/
│   │   ├── home/            ← Página principal
│   │   ├── shop/            ← Catálogo de productos
│   │   ├── product-detail/  ← Detalle individual
│   │   ├── cart/            ← Carrito de compras
│   │   ├── checkout/        ← Formulario de pago
│   │   └── login/           ← Login con OTP
│   ├── services/
│   │   ├── product.service.ts  ← Datos mock de productos
│   │   └── cart.service.ts     ← Estado del carrito (BehaviorSubject)
│   ├── app-routing.module.ts
│   └── app.module.ts
├── styles.css               ← Design Kit global
└── index.html               ← Bootstrap 5 CDN
```

### Datos simulados (mock)

Los productos están hardcodeados en `product.service.ts`. Para conectar al backend real, reemplazar `getProducts()` por una llamada HTTP con `HttpClient`.

### Integración ARCA (futura)

En `checkout.component.ts`, el método `onSubmit()` ya loguea el payload listo para enviar al endpoint de pagos.

---

## Tecnologías

- Angular 17
- Bootstrap 5.3 (CDN)
- RxJS (BehaviorSubject para el carrito)
- TypeScript

---

## Equipo

> Completar con los nombres del grupo
