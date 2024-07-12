
export const Footer = () => {
  return (
    <footer className="bg-white text-black h-screen flex flex-col justify-center 
    items-center mx-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between w-full text-center md:text-left mb-20">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-4xl font-bold mb-4">Sobre Nosotros</h3>
            <ul>
              <li className="mb-2"><a href="/nosotros/" className="hover:underline text-xl">Nuestra Historía</a></li>
              <li className="mb-2"><a href="/colaboradores/" className="hover:underline text-xl">Colaboradores</a></li>
              <li className="mb-2"><a href="#" className="hover:underline text-xl">Tiendas</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-4xl font-bold mb-4">Ayuda</h3>
            <ul>
              <li className="mb-2"><a href="/faq/" className="hover:underline text-xl">FAQ</a></li>
              <li className="mb-2"><a href="/devoluciones/" className="hover:underline text-xl">Devoluciones o Rembolsos</a></li>
              <li className="mb-2"><a href="#" className="hover:underline text-xl">Contactanos</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-4xl font-bold mb-4">Siguenos</h3>
            <ul>
              <li className="mb-2"><a href="https://www.tiktok.com/@tiendassetting" className="hover:underline text-xl">
                Tiktok</a></li>
              <li className="mb-2"><a href="https://www.facebook.com/Setting.informatica?locale=es_LA" className="hover:underline text-xl">
                Facebook</a></li>
              <li className="mb-2"><a href="https://api.whatsapp.com/send?phone=+51925077931text=Vengo%20de%20Settingweb" className="hover:underline text-xl">
                Whatsapp</a></li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8">
            <a href="#" className="mr-4 hover:underline text-2xl font-bold ">↑</a>
          </div>

        </div>      
        <div className="text-center mt-4 text-gray-600 text-sm">
          © 2024 Setting-Shop. Todos los Derechos Reservados. <a href="#" className="hover:underline text-xl">Politica de Privacidad</a>. Sitío por Jp
        </div>
      </div>
    </footer>
  )
}