import { mockDeep, mockReset } from 'vitest-mock-extended';

import { PrismaClient } from '@prisma/client';
import { beforeEach } from 'vitest';

beforeEach(() => {
  mockReset(prisma);
});

const prisma = mockDeep<PrismaClient>();

export default prisma;
