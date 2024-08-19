export const revalidate = 60; // 60 segundos

import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid, ProductImage, Title } from '@/components';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import {Image as Imagen} from "@nextui-org/image";
import { Carrusel } from '@/components/Carrusel';
import { Banner } from '@/components/Banner';
import { Opiniones } from '@/components/Opiniones';



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

      <div className='max-w-7xl lg:max-w-full xl:w-full m-auto mb-5 mt-10'>    
        <Image
          src='/imgs/banner.jpg'
          alt='imagen'
          layout='responsive'
          width={1600}
          height={200}
          className='w-full h-auto rounded-2xl'
        />
      </div>

      <Title 
        title='Compra por Categoría'
        className='mb-22'
      />

      <Carrusel />

      <Banner />

      <Title
        title="Nuestros productos"
        className='mb-22'
      />

      <ProductGrid 
        products={ products }
      />

      <Title 
        title='Comentarios'
        className='mt-10'
      />

      <Opiniones />

      {/* <Pagination totalPages={ totalPages } /> */}
      
    </>
  );
}
