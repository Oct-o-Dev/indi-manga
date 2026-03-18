// prisma.config.ts
import { defineConfig } from '@prisma/config';
import dotenv from 'dotenv';

// 1. Force load the .env file
dotenv.config();

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL,
  },
  // 2. Add this "migrations" section
  migrations: {
    // This command tells Prisma how to run your seed file
    // We use quotes around "module":"CommonJS" to make it work on Windows
    seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts',
  },
});