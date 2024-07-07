export const revalidate = 60; // 60 segundos

import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid, ProductImage, Title } from '@/components';
import Image from 'next/image';



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

      <div className='max-w-7xl m-auto border border-black rounded-lg mb-5'>
        <Image 
          src='/imgs/ki.png'
          alt='imagen'
          width={1400}
          height={400}
        />
      </div>

      <ProductGrid 
        products={ products }
      />

      {/* <Pagination totalPages={ totalPages } /> */}
      
    </>
  );
}
