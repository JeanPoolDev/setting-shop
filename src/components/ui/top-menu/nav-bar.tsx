"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { StoreIcon } from "lucide-react"

{/* <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/teclado">Teclados</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/audifono">Audifonos</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/memoria">Memoria</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/tarjetaVideo">Tarjeta de Video</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/monitor">Monitor</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/mouse">Mouse</Link>   
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/laptop">Laptop</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/impresora">Impresora</Link>  
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/cases">Cases</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/memoriaRam">Memoria Ram</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/procesador">Procesador</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/placaBase">PlacaBase</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/fuentePoder">Fuente de Poder</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" 
        href="/gender/otros">Otros</Link> */}

const components: { title: string; href: string; description: string }[] = [
  
  {
    title: "Placa Base",
    href: "/gender/placaBase",
    description:
      "Las mejores placas base de marcas como ASUS, Gigabyte y MSI.",
  },
  {
    title: "Memoria",
    href: "/gender/memoria",
    description:
      "Memorias de alta velocidad y capacidad de marcas como Samsung y Crucial.",
  },
  {
    title: "Tarjeta de Video",
    href: "/gender/tarjetaVideo",
    description: "Tarjetas gráficas de alto rendimiento de NVIDIA y AMD.",
  },
  {
    title: "Fuente de Poder",
    href: "/gender/fuentePoder",
    description:
      "Fuentes de poder eficientes y confiables de Corsair y EVGA.",
  },
  {
    title: "Procesador",
    href: "/gender/procesador",
    description:
      "Procesadores potentes de Intel y AMD.",
  },
  {
    title: "Memoria Ram",
    href: "/gender/memoriaRam",
    description: "Memorias RAM rápidas y estables de Kingston y G.Skill.",
  },
]

const componentsDos: { title: string; href: string; description: string }[] = [
  {
    title: "Laptops",
    href: "/gender/laptop",
    description:
      "Encuentra las mejores laptops del mercado",
  },
  {
    title: "Teclados",
    href: "/gender/teclado",
    description:
      "Los Mejores Teclados del Mundo en un solo lugar",
  },
  {
    title: "Audifonos",
    href: "/gender/audifono",
    description:
      "Descubre una amplia gama de audífonos de alta calidad ",
  },
  {
    title: "Mouse",
    href: "/gender/mouse",
    description:
      "Explora nuestra selección de mouse ergonómicos y de alto rendimiento",
  },
  {
    title: "Cases",
    href: "/gender/cases",
    description:
      "Protege tus dispositivos con los mejores cases",
  },
  {
    title: "Otros",
    href: "/gender/otros",
    description:
      "Encuentra otros accesorios y periféricos tecnológicos ",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bienvenido</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a 
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md items-center" 
                    href="/"
                  >
                    <StoreIcon size={50}/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      SETTING
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Una tienda en donde encontraras lo mejor en tecnología.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/gender/monitor" title="Monitor">
                Monitores de alta definición y calidad.
              </ListItem>
              <ListItem href="/gender/impresora" title="Impresora">
                Impresoras eficientes y multifuncionaless.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Hardware</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {componentsDos.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
