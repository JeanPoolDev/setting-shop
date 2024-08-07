'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { 
  IoCloseOutline, 
  IoLogInOutline, 
  IoLogOutOutline, 
  IoPeopleOutline,
  IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';

import { useUIStore } from '@/store';
import { logout } from '@/actions';
import { useSession } from 'next-auth/react';


export const Sidebar = () => {

  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";

  const onLogout = async() => {
    await logout();
    window.location.replace('/');
  }
 

  return (
    <div>

      {/* Background black */ }
      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black opacity-30 dark:bg-white"
          />

        )
      }


      {/* Blur */ }
      {
        isSideMenuOpen && (
          <div
            onClick={ closeMenu }
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />

        )
      }

      {/* Sidemenu */ }
      <nav
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-50 shadow-2xl transform transition-all duration-300 dark:bg-black",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }>


        <IoCloseOutline
          size={ 50 }
          className="absolute top-5 right-5 cursor-pointer"
          onClick={ () => closeMenu() }
        />


        {/* Input */ }
        <div className="relative mt-10 mb-10">
          {/* <IoSearchOutline size={ 20 } className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          /> */}
          <h2 className='ml-3 text-2xl'>Menú</h2>
        </div>
        

        {/* Menú */ }

        {
          isAuthenticated && (
            <>
              <Link
                href="/profile"
                onClick={() => closeMenu() }
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all dark:hover:text-black"
                >
                  <IoPersonOutline size={ 25 } />
                  <span className="ml-3 text-lg">Perfil</span>
              </Link>

              <Link
                href="/orders"
                onClick={() => closeMenu()}
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all dark:hover:text-black"
              >
                <IoTicketOutline size={ 25 } />
                <span className="ml-3 text-lg">Ordenes</span>
              </Link>
            </>
          )
        }    

        {isAuthenticated && (
          <button
            className="flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all dark:hover:text-black"
            onClick={() => onLogout()}
          >
            <IoLogOutOutline size={25} />
            <span className="ml-3 text-lg">Salir</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all dark:hover:text-black"
            onClick={() => closeMenu()}
          >
            <IoLogInOutline size={25} />
            <span className="ml-3 text-lg">Ingresar</span>
          </Link>
        )}
    
        {
          isAdmin && (
            <>
              <div className="w-full h-px bg-gray-200 my-5" />

              <div className="relative mt-5">
                <h2 className='ml-3 text-2xl'>Opciones de Administrador</h2>
              </div>

              <Link
                href="/admin/products"
                onClick={() => closeMenu()}
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all dark:hover:text-black"
              >
                <IoShirtOutline size={ 25 } />
                <span className="ml-3 text-lg">Productos</span>
              </Link>

              <Link
                href="/admin/orders"
                onClick={() => closeMenu()}
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all dark:hover:text-black" 
              >
                <IoTicketOutline size={ 25 } />
                <span className="ml-3 text-lg">Ordenes</span>
              </Link>

              <Link
                href="/admin/users"
                onClick={() => closeMenu()}
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all dark:hover:text-black"
              >
                <IoPeopleOutline size={ 25 } />
                <span className="ml-3 text-lg">Usuarios</span>
              </Link>
            </>
          )
        }

      </nav>

    </div>
  );
};