import Link from 'next/link';

import { Title } from '@/components';
import { ProductsInCart } from './ui/ProductsInCart';
import { OrderSummary } from './ui/OrderSummary';
import { Button } from '@/components/ui/button';


export default function CardPage() {


  // redirect('/empty');



  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1100px]">

        <Title title='Carrito' />


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */ }
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>
         


          {/* Items */ }
          <ProductsInCart />
          
           </div>




          {/* Checkout - Resumen de orden */ }
          <div className="bg-white rounded-xl shadow-lg p-7 h-fit dark:bg-zinc-900 dark:shadow-white">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>  

            <OrderSummary />
            
            {/* <div className="mt-5 mb-2 w-full">
              <Link 
                className="flex btn-primary justify-center"
                href="/checkout/address">
                Checkout
              </Link>
            </div> */}

            <Button className='w-full mt-4'>
              <Link 
                className="flex justify-center"
                href="/checkout/address">
                Verificar Compra
              </Link>
            </Button>

          </div>



        </div>



      </div>


    </div>
  );
}