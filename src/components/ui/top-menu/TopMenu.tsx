'use client';

import Link from "next/link";
import { titleFont } from "@/config/fonts";

import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

const TopMenu = () => {

  const openSideMenu = useUIStore( state => state.openSideMenu );

  return (
    <nav className="flex px-5 justify-between items-center w-full">

      {/* Logo */ }
      <div>
        <Link
          href="/">
          <span className={ `${ titleFont.className } antialiased font-bold` } >
            Setting
          </span>
          <span> | Tienda</span>
        </Link>
      </div>

      {/* Center Menu */ }
      <div className="hidden sm:block">

        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/category/teclado">Teclados</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/category/audifono">Audifonos</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/category/memoria">Memoria</Link>

      </div>


      {/* Search, Cart, Menu */ }
      <div className="flex items-center">

        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={ openSideMenu }
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menú
        </button>

      </div>


    </nav>
  );
}
 
export default TopMenu;