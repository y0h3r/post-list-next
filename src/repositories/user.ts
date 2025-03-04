import prisma from '@/libs/prisma';
import { MinimalUser } from '@/types/user';

class UserRepository {
  async getAllUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  async createUser(user: MinimalUser) {
    return prisma.user.create({
      data: user,
    });
  }

  async updateUser(id: string, data: MinimalUser) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: string) {
    return prisma.user.delete({ where: { id } });
  }
}

export const userRepository = new UserRepository();
