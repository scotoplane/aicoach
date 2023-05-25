// singleton: prevent multiple clients from being created

import { PrismaClient } from '@prisma/client';

// taking global object and adding prisma
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// either set prisma as global we already have or create new one
const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query'],
});

// if not in production, set prisma as global
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
