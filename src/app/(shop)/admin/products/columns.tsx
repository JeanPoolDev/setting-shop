"use client"

import { ColumnDef } from "@tanstack/react-table"
import CellImagenActions from "./cellImagenActions"
import CellTitutoActions from "./cellTitutloActions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductsColums = {
  Imagen: string
  Titulo: string
  Precio: number
  Categoria: string
  Inventario: number
  Slug: string
}

export const columns: ColumnDef<ProductsColums>[] = [
  {
    accessorKey: "Imagen",
    header: "Imagen",
    cell: ({ row }) => <CellImagenActions data={row.original}/>
  },
  {
    accessorKey: "Titulo",
    header: "Titulo",
    cell: ({ row }) => <CellTitutoActions data={row.original}/>
  },
  {
    accessorKey: "Precio",
    header: () => <div>Precio</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("Precio"))
      const formatted = new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
      }).format(amount)
 
      return <div className="font-bold">{formatted}</div>
    },
  },
  {
    accessorKey: "Categoria",
    header: "Categoría",
  },
  {
    accessorKey: "Inventario",
    header: "Inventario",
  },
]
