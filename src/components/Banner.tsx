import Image from "next/image"
import Link from "next/link"



export const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Man Section */}
      <div className="relative flex-1">
        <Image
          src="/imgs/2.jpeg" 
          alt="Man"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-sm">PRIMAVERA DE VERANO 2024</p>
          <h2 className="text-4xl font-bold">HardWare</h2>
          <div className="mt-4">
            <Link href={'/gender/procesador'}>
              <button className="border border-white px-4 py-2 m-2 hover:bg-white hover:text-black">PROCESADOR</button>
            </Link>
            <Link href={'gender/memoriaRam'}>
              <button className="border border-white px-4 py-2 m-2 hover:bg-white hover:text-black">RAM</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Woman Section */}
      <div className="relative flex-1">
        <Image
          src="/imgs/1.jpeg" 
          alt="Woman"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-sm">PRIMAVERA DE VERANO 2024</p>
          <h2 className="text-4xl font-bold">Componentes</h2>
          <div className="mt-4">
            <Link href={'/gender/laptop'}>
              <button className="border border-white px-4 py-2 m-2 hover:bg-white hover:text-black">LAPTOPS</button>
            </Link>
            <Link href={'/gender/mouse'}>
              <button className="border border-white px-4 py-2 m-2 hover:bg-white hover:text-black">MOUSE</button>
            </Link>   
          </div>
        </div>
      </div>
    </div>
  )
}
