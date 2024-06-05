"use client"

import { ColumnDef } from "@tanstack/react-table"

import CellActions from "./cellAction"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export type OrdenesColumns = {
  id: string | undefined;
  Nombre: string | undefined;
  Apellido: string | undefined;
  estaPagado: string;
}

export const columns: ColumnDef<OrdenesColumns>[] = [
  {
    accessorKey: "id",
    header: "id#",
  },
  {
    accessorKey: "Nombre",
    header: "Nombres",
  },
  {
    accessorKey: "Apellido",
    header: "Apellidos",
  },
  {
    accessorKey: "estaPagado",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pagado
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const isPaid = row.getValue("estaPagado") as string;
      const variant = {
        true: "ontline",
        false: "destructive"
      }[isPaid] ?? ('destrutive') as any;

      return <Badge variant={ variant }>{isPaid}</Badge>
    } 
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original}/>
  },
]
