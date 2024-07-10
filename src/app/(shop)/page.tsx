export const revalidate = 60; // 60 segundos

import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid, ProductImage, Title } from '@/components';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import {Image as Imagen} from "@nextui-org/image";
import { Carrusel } from '@/components/Carrusel';



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

      <div className='max-w-7xl lg:max-w-full xl:w-full m-auto mb-5'>
        <Image
          src='/imgs/banner.jpg'
          alt='imagen'
          layout='responsive'
          width={1600}
          height={200}
          className='w-full h-auto rounded-2xl'
        />
      </div>

      <Carrusel />

      <ProductGrid 
        products={ products }
      />

      {/* <Pagination totalPages={ totalPages } /> */}
      
    </>
  );
}
