"use client"

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table"
import CellAllOrders from "./cellAllOrders";

export type allOrdersColumns = {
  id: string | undefined;
  nombre: string | undefined;
  apellido: string | undefined;
  estado: 'Pagado' | 'NoPagado'
}

export const columns: ColumnDef<allOrdersColumns>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },{
    accessorKey: "apellido",
    header: "Apellido",
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const isPaid = row.getValue("estado") as string;
      const variant = {
        Pagado: "ontline",
        NoPagado: "destructive"
      }[isPaid] ?? ('destrutive') as any;

      return <Badge variant={ variant }>{isPaid}</Badge>
    } 
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAllOrders data={row.original}/>
  },
]
