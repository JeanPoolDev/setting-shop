'use client';
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProductsColums } from "./columns"
import React from "react"
import Link from "next/link"
import { deleteProduct } from "./deleteProduct"
import { useRouter } from "next/navigation"

interface ProductProps{
  data: ProductsColums
}

const CellActions: React.FC<ProductProps> = ({
  data
}) => {

  const router = useRouter()

  const handleDelete = async () => {
    const confirmDelete = confirm(`Are you sure you want to delete the product: ${data.Titulo}?`);
    if (!confirmDelete) return;

    try {
      const response = await deleteProduct(data.id);
      if (response.ok) {
        alert(response.message);
        router.refresh(); 
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
      alert('Error eliminando el producto');
    }
  }

  return ( 
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>
      <Link href={`/product/${data.Slug}`}>
        Ver Producto
      </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
      <Link
        href={`/admin/product/${data.Slug}`}
      >
        Editar Producto
      </Link>
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={handleDelete}
      >
        Eliminar Producto
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
   );
}
 
export default CellActions;