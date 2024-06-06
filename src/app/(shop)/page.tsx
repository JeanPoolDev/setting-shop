export const revalidate = 60; // 60 segundos

import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid, Title } from '@/components';



interface Props {
  searchParams: {
    page?: string; 
  }
}

export default async function Home({ searchParams } : Props) {

  // const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products } = await getPaginatedProductsWithImages({  });


  if ( products.length === 0 ) {
    redirect('/');
  }

  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />

      {/* <Pagination totalPages={ totalPages } /> */}
      
    </>
  );
}
