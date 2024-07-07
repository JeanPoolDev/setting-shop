import { titleFont } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';
import Image from 'next/image';

export default function NewAccountPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
    {/* Imagen a la izquierda */}
      <div className="md:w-1/2 relative h-1/2 md:h-full">
        <Image
          src={'/imgs/ki.png'}
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Formulario y título a la derecha */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Nueva cuenta</h1>
        <RegisterForm />
      </div> 
    </div>
    
  );
}