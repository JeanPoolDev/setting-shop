import { getPaginatedProductsWithImages } from "@/actions";
import { Title } from "@/components";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { CardStackIcon } from "@radix-ui/react-icons";


export default async function TestPage () {

  const { products } = await getPaginatedProductsWithImages({  });

  const totalProducts = products.length


  return (
    <div className="">

      <Title 
        title="Info sobre la tienda"
      />

      <div className="grid gap-4 grid-cols-3">

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            Productos Totales
          </CardTitle>
          <CardStackIcon className="w-4 h-5 text-muted-foreground"/>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
          { totalProducts }
          </div>
        </CardContent>
      </Card>
      
      </div>

    </div>
  )
}