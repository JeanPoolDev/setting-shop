-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Gender" ADD VALUE 'mouse';
ALTER TYPE "Gender" ADD VALUE 'laptop';
ALTER TYPE "Gender" ADD VALUE 'tarjetaVideo';
ALTER TYPE "Gender" ADD VALUE 'impresora';
ALTER TYPE "Gender" ADD VALUE 'cases';
ALTER TYPE "Gender" ADD VALUE 'fuentePoder';
ALTER TYPE "Gender" ADD VALUE 'memoriaRam';
ALTER TYPE "Gender" ADD VALUE 'procesador';
ALTER TYPE "Gender" ADD VALUE 'placaBase';
ALTER TYPE "Gender" ADD VALUE 'otros';
