import { url } from "inspector";
import prisma from "../lib/prisma";
import { initialData } from "./seed";


async function main(){

  //TODO: Borrar registros de las tablas

    await prisma.user.deleteMany();

    await prisma.productoImagen.deleteMany();
    await prisma.producto.deleteMany();
    await prisma.categoria.deleteMany();

  const {categories, products, users} = initialData;

  //TODO: usuarios 
  await prisma.user.createMany({
    data: users
  });

  //TODO: Categorias

  const CategoriasData = categories.map((category) => ({
    name: category
  }));
  
  await prisma.categoria.createMany({
    data: CategoriasData
  })

  const categoriesDB = await prisma.categoria.findMany();
  
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  },{} as Record<string, string>);

  //TODO: Insertar productos

  products.forEach( async (product) => {

    const { type, images, ...rest } = product;

    const dbProduct = await prisma.producto.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    })

    //TODO: Insertar Imagenes

    const imagesData = images.map( image => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productoImagen.createMany({
      data: imagesData
    })

  })
 




  console.log('seed Execute Success');
}





(() => {
  
  if(process.env.NODE_ENV === 'production') return; 
  
  
  main();


})();