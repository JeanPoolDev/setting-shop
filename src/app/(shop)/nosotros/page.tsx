
import { Title } from "@/components";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default async function NosotrosPage() {

  return (
    <>
    <div className="flex flex-col justify-center">

    <Title 
      title="Sobre nosotros"
      />
 
    <div className="flex items-center justify-center flex-col h-screen">
      {/* <h1 className="text-3xl mb-10">Nuestra Misión</h1> */}
      <p className="text-left px-4 sm:px-8 lg:px-16 text-lg sm:text-xl lg:text-4xl font-bold tracking-wide">
      Nos esforzamos por ofrecer una amplia gama de computadoras y componentes de PC de última generación, así como servicios técnicos, con un enfoque centrado en la excelencia, la innovación y la satisfacción del cliente.
      </p>
    </div>

    <div className="flex items-center justify-center flex-col h-screen bg-gray-100">
      {/* <h1 className="text-3xl mb-10">Nuestra Misión</h1> */}
      <p className="text-center px-4  sm:px-8 lg:px-[250px] text-lg sm:text-xl lg:text-4xl tracking-wide">
        Innovación sin límites, calidad sin compromisos,para una vida mejor conectada.
      </p>
    </div>

    {/* <h1 className="text-3xl mb-10 text-center">Colaboradores</h1>
  
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <Card 
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
      <Card 
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] lg:ml-10"
        shadow="sm">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Another Card</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
      <Card 
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] lg:ml-10"
        shadow="sm">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Another Card</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
      <Card 
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] lg:ml-10"
        shadow="sm">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Another Card</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </div> */}
    </div>
  

    </>
  );
}
