'use client'

import {Card, CardHeader, CardBody, Image, Divider, Link , CardFooter} from "@nextui-org/react";

const opiniones = [
  {
    id: 1,
    name:'Jean Pool',
    org: 'jeanpool@gmail.com',
    src: 'https://avatars.githubusercontent.com/u/148154862?s=400&u=ca90d177703c5834c2db829d054b4b1266583917&v=4',
    comentario: 'Esta es la mejor página que probé, tiene buenos diseños y productos',
    url: 'https://github.com/jeanpooldev'
  },
  {
    id: 2,
    name:'Mariana',
    org: 'mariana.sanchez@gmail.com',
    src: 'https://avatars.githubusercontent.com/u/12345678?s=200&v=4',
    comentario: 'Los precios son muy competitivos y la calidad de los productos es excelente. Muy recomendable.',
    url: 'https://github.com/marianasanchez'
  },
  {
    id: 3,
    name:'Carlos',
    org: 'carlos.perez@hotmail.com',
    src: 'https://avatars.githubusercontent.com/u/87654321?s=200&v=4',
    comentario: 'El servicio al cliente es increíble, me ayudaron con todas mis dudas rápidamente.',
    url: 'https://github.com/carlosperez'
  },
  {
    id: 4,
    name:'Laura',
    org: 'laura.gomez@outlook.com',
    src: 'https://avatars.githubusercontent.com/u/98765432?s=200&v=4',
    comentario: 'La variedad de productos es impresionante y siempre encuentro lo que necesito. ¡Muy satisfecha!',
    url: 'https://github.com/lauragomez'
  }
]


export const Opiniones = () => {

  return (
    <div className="flex justify-center gap-4 mb-20 lg:flex-row flex-col items-center">
       { opiniones.map( opi => (
        <Card className="max-w-[400px]" key={opi.id}>
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={opi.src}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{opi.name}</p>
            <p className="text-small text-default-500">{opi.org}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p>{opi.comentario}</p>
        </CardBody>
        <Divider/>
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href={opi.url}
          >
            Visita sus redes sociales
          </Link>
        </CardFooter>
      </Card>
       ))}
    </div>
  )
}
