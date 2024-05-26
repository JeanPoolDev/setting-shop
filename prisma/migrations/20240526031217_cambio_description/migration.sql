/*
  Warnings:

  - Made the column `description` on table `Producto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Producto" ALTER COLUMN "description" SET NOT NULL;
