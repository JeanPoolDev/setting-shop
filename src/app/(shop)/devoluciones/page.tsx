
import { Title } from "@/components";
import {Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default async function DevolucionesPage() {

  return (  
    <>
      <div className="flex flex-col text-center justify-center items-center lg:px-[250px]">

        <h1 className="py-10 text-3xl font-bold">Devoluciones y Reembolsos</h1>

        <div className="text-left text-lg mb-10">
        <p className="font-semibold mb-5">
        Its important to us that youre completely happy with your purchase!</p>
        <p className="">Items that are in resell-able condition can be returned for a refund or exchange within 30 days of receipt.  Please email orders@popchart.co with your order number to initiate a return.  (Please note that return shipping is the responsibility of the customer, and that current response time is 3-5 business days.)</p>
        </div>

        <div className="text-left text-lg mb-10 space-y-4">
        <p className="font-semibold mb-5">
        Once your return is processed, please make sure include the following information with your package:</p>
        <li>Your Name, address, email and order number </li>
        <li>Your Name, address, email and order number </li>
        <li>Your Name, address, email and order number </li>
        <li>Your Name, address, email and order number </li>

        </div>


        <div className="text-left text-lg mb-10">
        <p className="font-semibold mb-5">
        Envienos sus queja y consultas a los siguienes datos y numeros de la empresa responsable: </p>
        <p>setting@gmail.com</p>
        <p>3503 Holts Chapel Rd</p>
        <p>Greensboro NC 27401</p>
        </div>
        
      </div>
    </>
  );
}
