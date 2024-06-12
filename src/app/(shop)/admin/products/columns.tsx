"use client"

import { ColumnDef } from "@tanstack/react-table"
import CellImagenActions from "./cellImagenActions"
import CellActions from "./cellActions"

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
  {
    header:'Acciones',
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original}/>
  }
]
