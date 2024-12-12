import z from 'zod';

import {
  BASE_API_URL,
  CLIENT_URL,
  CORS_ORIGIN,
  DEFAULT_HOSTNAME,
  GITHUB_API_URL,
  MONGODB_DATABASE_URL,
} from './constants';

const envSchema = z.object({
  HOST: z
    .string()
    .trim()
    .refine(
      host => host.startsWith('http') || host.startsWith('https'),
      'Invalid URL format',
    )
    .default(DEFAULT_HOSTNAME),
  PORT: z.coerce
    .number({
      description:
        '.env files convert numbers to strings, therefore we have to enforce them to be numbers',
    })
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(4000),
  BASE_URL: z.string().trim().min(1).default(BASE_API_URL),
  DATABASE_URL: z
    .string()
    .url()
    .trim()
    .refine(url => url.startsWith('mongodb://'), 'Invalid Database URL format')
    .default(MONGODB_DATABASE_URL),
  REDIS_HOST: z.string().trim().default('localhost'),
  REDIS_PORT: z.coerce
    .number()
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(6379),
  REDIS_TTL: z.coerce
    .number()
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(30),
  REDIS_TIMEOUT: z.coerce
    .number()
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(5000),
  GITHUB_API_URL: z
    .string()
    .url()
    .trim()
    .refine(url => url.startsWith('https://'), 'Invalid Github URL format')
    .default(GITHUB_API_URL),
  LOG_DIR: z.string().optional(),
  CLIENT_URL: z
    .string()
    .url()
    .trim()
    .refine(url => url.startsWith('http://'), 'Invalid client URL format')
    .default(CLIENT_URL),
  CORS_ORIGIN: z.string().trim().min(1).default(CORS_ORIGIN),
  CORS_CREDENTIALS: z.coerce.boolean().default(true),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
});

const envServer = envSchema.safeParse({
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  BASE_URL: process.env.BASE_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_TTL: process.env.REDIS_TTL,
  REDIS_TIMEOUT: process.env.REDIS_TIMEOUT,
  GITHUB_API_URL: process.env.GITHUB_API_URL,
  GITHUB_SECRET: process.env.GITHUB_SECRET,
  LOG_DIR: process.env.LOG_DIR,
  CLIENT_URL: process.env.CLIENT_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  CORS_CREDENTIALS: process.env.CORS_CREDENTIALS,
  NODE_ENV: process.env.NODE_ENV,
});

if (!envServer.success) {
  console.error('Environment validation failed:');

  envServer.error.issues.forEach(issue => {
    console.error(`- ${issue.path.join('.')}: ${issue.message}`);
  });

  throw new Error('There is an error with the server environment variables');
}

export const serverSchema = envServer.data;
