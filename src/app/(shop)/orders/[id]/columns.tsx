"use client"

import { ColumnDef } from "@tanstack/react-table"

import CellActions from "./cellAction"


export type OrdenesColumns = {
  id: string | undefined;
  firstName: string | undefined;
  isPaid: string;
  lastName: string | undefined;
}

export const columns: ColumnDef<OrdenesColumns>[] = [
  {
    accessorKey: "id",
    header: "id#",
  },
  {
    accessorKey: "firstName",
    header: "Nombres",
  },
  {
    accessorKey: "lastName",
    header: "Apellidos",
  },
  {
    accessorKey: "isPaid",
    header: "Pagado",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original}/>
  },
]
