// index.js
import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);











// async function main() {
// //   const user = await prisma.user.create({
// //     data: { name: 'Alice', email: 'alice@example.com' }
// //   });
// //   console.log(user);

//   const users = await prisma.user.findMany();
//   console.log(users);
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect());
