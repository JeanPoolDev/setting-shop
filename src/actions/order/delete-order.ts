'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';

export const deleteOrder = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    return {
      ok: false,
      message: 'Debe de estar autenticado',
    };
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id },
    });

    if (!order) throw `Orden con id ${id} no existe`;

    if (session.user.role === 'user' && session.user.id !== order.userId) {
      throw `Orden con id ${id} no pertenece a este usuario`;
    }

    // Eliminar registros relacionados
    await prisma.orderItem.deleteMany({
      where: { orderId: id },
    });

    await prisma.orderAddress.deleteMany({
      where: { orderId: id },
    });

    // Eliminar la orden
    await prisma.order.delete({
      where: { id },
    });

    return {
      ok: true,
      message: 'Orden eliminada correctamente',
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: 'Error eliminando la orden',
    };
  }
};
