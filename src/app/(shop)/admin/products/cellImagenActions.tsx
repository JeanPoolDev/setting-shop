import Link from "next/link";
import { ProductsColums } from "./columns";
import { ProductImage } from "@/components";
import { Database } from "lucide-react";

interface CellActionsProps {
  data: ProductsColums
}


const CellImagenActions: React.FC<CellActionsProps> = ({
  data
}) => {
  return ( 
    <div>
      <Link href={`/product/${data.Slug}`}>
        <ProductImage
          src={ data.Imagen }
          width={80}
          height={80}
          alt={data.Titulo}
          className="w-20 h-20 object-cover rounded"
        />
      </Link>
    </div>
   );
}
 
export default CellImagenActions;