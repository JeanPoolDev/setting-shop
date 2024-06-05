'use client';

import { OrdenesColumns } from "./columns";

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { orderColumns } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

interface CellActionsProps {
  data: OrdenesColumns;
}

const CellActions: React.FC<CellActionsProps> = ({
  data
}) => {

  const router = useRouter()

  const redirection = () => {
    router.push(`/orders/${ data.id }`)
  }

  return ( 
    <div>
       <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
            onClick={redirection}
            >
              Ver Orden
            </DropdownMenuItem>
            <DropdownMenuItem
            >
              Eliminar Orden
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
   );
}
 
export default CellActions;