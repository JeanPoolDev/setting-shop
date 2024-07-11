import Image from 'next/image';
import Link from 'next/link';
import { titleFont } from '@/config/fonts';

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        <h2 className={ `${ titleFont.className } antialiased text-9xl` }>404</h2>
        <p className="font-semibold text-xl">Whoops! Jose donde te metiste.</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link
            href='/'
            className="font-bold hover:underline transition-all text-blue-600"
          >
            inicio
          </Link>
          {' '}
          <Link 
            href="https://api.whatsapp.com/send?phone=+51973902225&text=Ayuda%20de%20Soporte"
            className="font-bold hover:underline transition-all text-blue-600"
          >
            Contactanos
          </Link>
        </p>
      </div>



      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={ 550 }
          height={ 550 }
        />

      </div>


    </div>
  );
};