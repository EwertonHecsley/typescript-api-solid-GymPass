/*
  Warnings:

  - Added the required column `gym_id` to the `chek_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `chek_ins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chek_ins` ADD COLUMN `gym_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `chek_ins` ADD CONSTRAINT `chek_ins_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chek_ins` ADD CONSTRAINT `chek_ins_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
