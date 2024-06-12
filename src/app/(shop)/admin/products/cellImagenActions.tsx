import { ProductsColums } from "./columns";
import { ProductImage } from "@/components";

interface CellActionsProps {
  data: ProductsColums
}


const CellImagenActions: React.FC<CellActionsProps> = ({
  data
}) => {
  return ( 
    <ProductImage
      src={ data.Imagen }
      width={80}
      height={80}
      alt={data.Titulo}
      className="w-20 h-20 object-cover rounded"
    />
   );
}
 
export default CellImagenActions;