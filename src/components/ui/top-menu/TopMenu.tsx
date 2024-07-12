'use client';

import Link from "next/link";
import { titleFont } from "@/config/fonts";

import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { useCartStore, useUIStore } from "@/store";
import { useEffect, useState } from "react";
import { ModeToggle } from "../theme/page";
import { NavigationMenuDemo } from "./nav-bar";
import { Button } from "../button";

const TopMenu = () => {

  const openSideMenu = useUIStore( state => state.openSideMenu );

  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 flex px-0 md:px-3 lg:px-5 justify-between items-center w-full bg-white z-50 p-5 dark:bg-zinc-900">
      {/* Logo */}
      <div>
        <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold text-orange-600 lg:text-4xl md:text-2xl hidden md:inline-block`}>
          S<span className="text-blue-600">ett<span className="text-orange-600">i</span>ng</span>
        </span>

        </Link>
      </div>

      {/* Center Menu */}
      <div className="text-center">
        <NavigationMenuDemo />
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center gap-1">
        {/* <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link> */}
        <div className="hidden lg:block md:block">
          <ModeToggle />
        </div>
        <Link href={((totalItemsInCart === 0) && loaded) ? `/empty` : "/cart"} className="mx-2">
          <div className="relative">
            {(loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <Button
          onClick={openSideMenu}
          variant="outline"
          className="m-2 p-2 rounded-md transition-all">
          Menú
        </Button>
      </div>
    </nav>
  );
}
 
export default TopMenu;