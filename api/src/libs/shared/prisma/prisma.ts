import { PrismaClient } from '@prisma/client';
import { queryLogger } from './middlewares/query-logger';

let database: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  database = new PrismaClient();
}

if (!global.database) {
  global.database = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    errorFormat: 'pretty',
  });

  database = global.database;
  database.$use(queryLogger);
}

export { database };
