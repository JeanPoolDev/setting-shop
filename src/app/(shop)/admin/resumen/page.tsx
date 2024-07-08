import { Title } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

export default async function ResumenPage() {



  return (
    <>
      <Title title="Resumen de Tienda"/>

      <div className="grid gap-4 grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Los ingresos totales 
            </CardTitle>
            S/.
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              12  
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ventas
            </CardTitle>
            S/.
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              12  
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Productos
            </CardTitle>
            <Package className="h-4 w-4"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              12  
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}