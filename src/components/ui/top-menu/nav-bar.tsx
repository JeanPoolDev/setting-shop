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
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Memoria",
    href: "/gender/memoria",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Tarjeta de Video",
    href: "/gender/tarjetaVideo",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Fuente de Poder",
    href: "/gender/fuentePoder",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Procesador",
    href: "/gender/procesador",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Memoria Ram",
    href: "/gender/memoriaRam",
    description: "Visually or semantically separates content.",
  },
]

const componentsDos: { title: string; href: string; description: string }[] = [
  {
    title: "Laptops",
    href: "/gender/laptop",
    description:
      "Los Mejores Teclados del Mundo en un solo lugar.",
  },
  {
    title: "Teclados",
    href: "/gender/teclado",
    description:
      "Los Mejores Teclados del Mundo en un solo lugar.",
  },
  {
    title: "Audifonos",
    href: "/gender/audifono",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Mouse",
    href: "/gender/mouse",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Cases",
    href: "/gender/cases",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Otros",
    href: "/gender/otros",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/gender/impresora" title="Impresora">
                How to install dependencies and structure your app.
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
