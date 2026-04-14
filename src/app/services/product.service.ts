import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Remera Oversize Basic',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
      description: 'Remera oversize de algodón premium. Corte relajado, ideal para el día a día. Disponible en varios colores. Composición: 100% algodón peinado.',
      category: 'Remeras'
    },
    {
      id: 2,
      name: 'Jean Mom Fit',
      price: 28900,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80',
      description: 'Jean mom fit de tiro alto con lavado claro. Confeccionado en denim elastizado de alta calidad. Perfecto para looks casuales y urbanos.',
      category: 'Pantalones'
    },
    {
      id: 3,
      name: 'Campera Bomber',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80',
      description: 'Campera bomber clásica con cuello acanalado y cierre central. Interior acolchado liviano. Estilo urbano para cualquier estación.',
      category: 'Abrigos'
    },
    {
      id: 4,
      name: 'Vestido Lino Midi',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80',
      description: 'Vestido midi confeccionado en lino natural. Escote en V y tirantes regulables. Ideal para salidas y eventos casuales.',
      category: 'Vestidos'
    },
    {
      id: 5,
      name: 'Buzo Hoodie Premium',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80',
      description: 'Buzo hoodie con canguro delantero. Tela fleece doble cara, interior suave y abrigado. Diseño unisex con capucha forrada.',
      category: 'Buzos'
    },
    {
      id: 6,
      name: 'Short Deportivo',
      price: 9800,
      image: 'https://images.unsplash.com/photo-1562886812-a17f83dea584?w=500&q=80',
      description: 'Short deportivo con tela dry-fit de alta performance. Cintura elástica con cordón. Ideal para entrenamiento y uso diario.',
      category: 'Shorts'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
