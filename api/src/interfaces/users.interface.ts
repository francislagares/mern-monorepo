import { Role } from '@prisma/client';

export interface User {
  id?: number;
  email: string;
  password: string;
  role: Role;
}
