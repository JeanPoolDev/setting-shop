'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';

export const deleteProduct = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    return {
      ok: false,
      message: 'Debe de estar autenticado',
    };
  }

  try {
    const product = await prisma.producto.findUnique({
      where: { id },
    });

    if (!product) throw `Producto con id ${id} no existe`;

    if (session.user.role !== 'admin') {
      throw `Solo los administradores pueden eliminar productos`;
    }

    // Eliminar registros relacionados
    await prisma.productoImagen.deleteMany({
      where: { productId: id },
    });

    // Eliminar el producto
    await prisma.producto.delete({
      where: { id },
    });

    return {
      ok: true,
      message: 'Producto eliminado correctamente',
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: 'Error eliminando el producto',
    };
  }
};
