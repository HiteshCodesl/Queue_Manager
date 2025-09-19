/*
  Warnings:

  - You are about to drop the column `person` on the `Token` table. All the data in the column will be lost.
  - Added the required column `label` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Token" DROP COLUMN "person",
ADD COLUMN     "assignedAt" TIMESTAMP(3),
ADD COLUMN     "cancelledAt" TIMESTAMP(3),
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "servedAt" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'waiting',
ALTER COLUMN "position" DROP DEFAULT;
