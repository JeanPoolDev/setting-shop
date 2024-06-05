import Link from "next/link";
import { ProductsColums } from "./columns";
import { ProductImage } from "@/components";
import { Database } from "lucide-react";

interface CellTitutoProps {
  data: ProductsColums
}


const CellTitutoActions: React.FC<CellTitutoProps> = ({
  data
}) => {
  return ( 
    <div>
      <Link
        href={`/admin/product/${data.Slug}`}
        className="hover:underline"
      >
        {data.Titulo}
      </Link>
    </div>
   );
}
 
export default CellTitutoActions;