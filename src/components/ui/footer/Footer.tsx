
import {  ArrowUp, PhoneCallIcon } from 'lucide-react';
import { Separator } from '../separator';
import { IoLogoFacebook, IoLogoTiktok, IoLogoWhatsapp } from 'react-icons/io5';


export const Footer = () => {
  return (
    <footer className="py-16 text-center bg-gray-900 text-white h-screen flex flex-col items-center justify-center ">
        <div className="container mx-auto">

            <div className='mb-20'>
              <p className="text-gray-400 mb-4 text-xl">
                ¿Estás listo?
              </p>
              <h2 className="text-7xl font-bold mb-8 text-center">
                Listo Para Comprar
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-8">

                <div className="text-xl font-semibold hover:border-b-2">
                    <a href="mailto:jeanpooldev@gmail.com">
                      jeanpooldev@gmail.com
                    </a>
                </div>

                <div>
                  <a 
                  href='#'
                  className="px-10 py-7 text-white rounded-full border-white border hover:bg-white hover:text-black text-xl">
                    ¡ Comprar Ahóra !
                  </a>
                </div>

                <div className="text-lg font-semibold">
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <PhoneCallIcon />
                        </svg>
                        <span>+51 973 902 225</span>
                    </div>
                    <p className="text-gray-400">
                      Perú / Junín / Huancayo  (PEN)
                    </p>
                </div>

            </div>

            <Separator className='bg-gray-600 my-20'/>

            <div className="flex justify-between space-x-4 items-center">
              <div className='flex justify-center gap-5'>
                <a 
                  href="https://www.tiktok.com/@tiendassetting"
                  className='rounded-full p-4 border hover:bg-white hover:text-black'
                  >
                    <IoLogoTiktok className='h-6 w-6'/>
                </a>
                <a 
                  href="https://www.facebook.com/Setting.informatica?locale=es_LA"
                  className='rounded-full p-4 border hover:bg-white hover:text-black'
                  >
                    <IoLogoFacebook className='h-6 w-6'/>
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=+51925077931text=Vengo%20de%20Settingweb"
                  className='rounded-full p-4 border hover:bg-white hover:text-black'
                  >
                    <IoLogoWhatsapp className='h-6 w-6'/>
                    
                </a> 
              </div>
              <div>
                <a href="https://api.whatsapp.com/send?phone=+51973902225&text=Ayuda%20de%20Soporte">
                  Contáctanos
                </a>
              </div>            
            </div>
        </div>
        <div className="fixed bottom-4 right-4">
            <a href="#" className="text-gray-400 hover:text-white">
              ¡Subir!
              <ArrowUp className='w-10 h-10'/>
            </a>
        </div>
    </footer>

  )
}