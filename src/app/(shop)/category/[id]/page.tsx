import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const seedProducts = initialData.products;


interface Props {
  params: {
    id: Category;
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function({ params }: Props) {

  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id );

  const labels: Record<Category, string> = {
    'teclado': 'Teclados',
    'audifono': 'Audifonos',
    'memoria': 'Memorias',
    'monitor': 'Monitores'
  }

  // if( id === 'audifonos' ){
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
      
    </>
  );
}