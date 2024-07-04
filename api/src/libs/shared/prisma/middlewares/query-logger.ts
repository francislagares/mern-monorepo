import { Prisma } from '@prisma/client';

import logger from '@/utils/logger';

export const queryLogger: Prisma.Middleware = async (params, next) => {
  const before = Date.now();

  const result = await next(params);

  const after = Date.now();

  logger.info(
    `Query ${params.model}.${params.action} took ${after - before}ms`,
    ` ${params}`,
  );

  return result;
};
