/*
  Warnings:

  - You are about to drop the column `userId` on the `budget` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `budget` DROP FOREIGN KEY `Budget_userId_fkey`;

-- AlterTable
ALTER TABLE `budget` DROP COLUMN `userId`;
