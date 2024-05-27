export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
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
  size: Size;
  image: string;
}


export type Category = 'teclado'|'audifono'|'memoria'|'monitor'
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type Type = 'teros'|'logitech'|'reddragon'|'halion';