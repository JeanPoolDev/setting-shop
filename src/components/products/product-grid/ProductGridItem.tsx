'use client';

import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';
import { ProductImage } from '@/components/product/product-image/ProductImage';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {

  const [ displayImage, setDisplayImage ] = useState( product.images[ 0 ] );


  return (
    <div className="bg-white group cursor-pointer rounded-2xl -3 space-y-4 overflow-hidden fade-in dark:bg-zinc-800">
      <Link href={ `/product/${ product.slug }` }>
        <div className='aspect-square rounded-t-lg bg-gray-100 relative'>
        <ProductImage
          src={ displayImage }
          alt={ product.title }
          className="aspect-square object-cover rounded-md"
          width={ 500 }
          height={ 500 }
          onMouseEnter={ () => setDisplayImage( product.images[1] ) }
          onMouseLeave={ () => setDisplayImage( product.images[0] ) }
          isZoomed
        />
        </div>
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="font-semibold text-lg"
          href={ `/product/${ product.slug }` }>
          { product.title }
        </Link>
        <span className="flex items-center">
          S/.{ product.price }
        </span>
      </div>

    </div>
  );
};