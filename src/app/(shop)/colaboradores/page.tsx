
import { Title } from "@/components";
import {Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default async function NosotrosPage() {

  return (  
    <>
     <div className="flex flex-col md:flex-row items-center justify-between p-8 min-h-screen gap-5">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">Colaboradores</h1>
        <p className="text-2xl mb-8 md:mb-16">
          We create data-rich content for print and digital media, custom products, and installations.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Get in touch &rarr;
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/imgs/ki.png"
          alt="South Park Charted"
          className="w-full h-[550px] object-cover rounded-none"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-5 min-h-screen">
      <div className="md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
        <Image
          src="/imgs/ki.png"
          alt="South Park Charted"
          className="w-full h-[550px] object-cover rounded-none"
        />
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/imgs/ki.png"
          alt="South Park Charted"
          className="w-full h-[550px] object-cover rounded-none"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-5 min-h-screen">
      <div className="md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
        <Image
          src="/imgs/ki.png"
          alt="South Park Charted"
          className="w-full h-[550px] object-cover rounded-none"
        />
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/imgs/ki.png"
          alt="South Park Charted"
          className="w-full h-[550px] object-cover rounded-none"
        />
      </div>
    </div>
    </>
  );
}
