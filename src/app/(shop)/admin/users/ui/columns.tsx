"use client"

import { ColumnDef } from "@tanstack/react-table"
import CellUsersActions from "./cellUsers";

export type UserColumns = {
  id: string
  email: string
  nombre: string | undefined;
  rol: 'admin' | 'user'
}

export const columns: ColumnDef<UserColumns>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    header:"Rol",
    id: "actions",
    cell: ({ row }) => <CellUsersActions data={row.original}/>
  },
]
