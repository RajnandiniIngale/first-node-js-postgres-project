// resolvers/userResolvers.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userResolvers = {
  getUsers: async () => await prisma.user.findMany(),
  getUser: async ({ id }: { id: string }) => await prisma.user.findUnique({ where: { id: parseInt(id) } }),
  createUser: async ({ name, email }: { name: string, email: string }) => await prisma.user.create({ data: { name, email } }),
  updateUser: async ({ id, name, email }: { id: string, name?: string, email?: string }) =>
    await prisma.user.update({ where: { id: parseInt(id) }, data: { name, email } }),
  deleteUser: async ({ id }: { id: string }) => await prisma.user.delete({ where: { id: parseInt(id) } }),
};

export default userResolvers;
