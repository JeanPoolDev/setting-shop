'use client'

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const misImagenes = [
  "/imgs/1.jpg",
  "/imgs/2.jpg",
  "/imgs/3.jpg",
  "/imgs/4.jpg",
  "/imgs/5.jpg",
]

export const Carrusel = () => {
  return (
    <div className="w-full flex justify-center pb-10">
      <Carousel className="w-full max-w-6xl"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        })
      ]}
      >
      <CarouselContent className="-ml-1">
        {misImagenes.map((src, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={src}
                    width={1000}
                    height={1000}
                    alt={`Image ${index + 1}`}
                    objectFit="cover"
                    className='w-full h-auto rounded-2xl'
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex justify-center items-center"/>
      <CarouselNext className="hidden sm:flex justify-center items-center"/>
    </Carousel>
    </div>
  )
}
