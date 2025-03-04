import prisma from '@/libs/prisma';
import { MinimalPostUpdate, MinimalPost } from '@/types/post';

class PostRepository {
  async getAllPosts() {
    return prisma.post.findMany();
  }

  async getPostById(id: string) {
    return prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
  }

  async createPost(post: MinimalPost) {
    return prisma.post.create({
      data: post,
    });
  }

  async updatePost(id: string, data: MinimalPostUpdate) {
    return prisma.post.update({
      where: { id },
      data,
    });
  }

  async deletePost(id: string) {
    return prisma.post.delete({ where: { id } });
  }

  async getAllPostsFromAuthor(authorId: string) {
    return prisma.post.findMany({
      where: { authorId },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
  }
}

export const postRepository = new PostRepository();
