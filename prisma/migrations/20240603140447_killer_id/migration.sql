/*
  Warnings:

  - You are about to drop the column `size` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `sizes` on the `Producto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "size";

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "sizes";

-- DropEnum
DROP TYPE "Size";
