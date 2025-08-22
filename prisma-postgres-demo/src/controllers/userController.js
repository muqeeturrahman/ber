import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany({ include: { posts: true } });
  res.json(users);
};