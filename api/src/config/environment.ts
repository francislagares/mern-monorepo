import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  HOST,
  PORT,
  BASE_URL,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_TTL,
  REDIS_TIMEOUT,
  CLIENT_URL,
  JWT_SECRET,
  LOG_DIR,
  ORIGIN,
} = process.env;
