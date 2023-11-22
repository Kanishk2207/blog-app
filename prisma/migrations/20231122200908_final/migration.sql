/*
  Warnings:

  - A unique constraint covering the columns `[postTitle]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postContent]` on the table `post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `post_postTitle_key` ON `post`(`postTitle`);

-- CreateIndex
CREATE UNIQUE INDEX `post_postContent_key` ON `post`(`postContent`);
