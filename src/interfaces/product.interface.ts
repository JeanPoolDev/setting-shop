export interface Product {
  //todo: id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  type: Type;
  gender: Category;
}

export type Category = 'teclado'|'audifono'|'memoria'|'monitor'
export type Size = '256'|'480'|'960'|'19'|'24'|'27'|'32';
export type Type = 'shirts'|'pants'|'hoodies'|'hats';