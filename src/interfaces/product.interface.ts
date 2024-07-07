export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  //todo: type: Type;
  gender: Category;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}

type Category = 'teclado'|'audifono'|'memoria'|'monitor'|'mouse'|'laptop'|'tarjetaVideo'|'impresora'|'cases'|'fuentePoder'|'memoriaRam'|'procesador'|'placaBase'|'otros'
export type Type = 'teros'|'logitech'|'reddragon'|'halion'|'corsair'|'hyperx'|'gigabyte'|'asus'|'msi'|'intel'|'amd'|'enkore'|'samsung'|'noc'|'kingston'|'tforce'|'teamgroup'|'hp'|
'lenovo'|'epson'|'cannon'|'brother'|'micronics'|'western digital'|'seagate'|
'toshiba'|'cable';