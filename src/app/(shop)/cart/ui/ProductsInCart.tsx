'use client';
import { useEffect, useState } from 'react';

import { useCartStore } from '@/store';
import { ProductImage, QuantitySelector } from '@/components';
import Link from 'next/link';



export const ProductsInCart = () => {

  const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
  const removeProduct = useCartStore( state => state.removeProduct );

  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore( state => state.cart );


  useEffect(() => {
    setLoaded(true) ;
  },[]);




  if( !loaded ) {
    return <p>Loading...</p>
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={ `${ product.slug }`  } className="flex p-3 border-2 justify-between rounded-xl">
          <ProductImage
            src={product.image }
            width={100}
            height={100}
            style={{
              width: "120px",
              height: "120px",
            }}
            alt={product.title}
            className="mr-5 rounded border"
          />

          <div>
            <Link 
              className="hover:underline cursor-pointer"
              href={ `/product/${ product.slug } ` }>
              {product.title}
            </Link>
            
            <p>S/.{product.price}</p>
            <QuantitySelector 
              quantity={ product.quantity } 
              onQuantityChanged={ quantity => updateProductQuantity(product, quantity) }
            />

            <button 
              onClick={ () => removeProduct(product) }
              className="underline mt-3">Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
