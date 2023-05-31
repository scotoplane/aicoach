import { PrismaClient } from '@prisma/client';

declare global {
  interface Window {
    cachedPrisma: PrismaClient;
  }
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!window.cachedPrisma) {
    window.cachedPrisma = new PrismaClient();
  }
  prisma = window.cachedPrisma;
}

const db = prisma;

export default db;
