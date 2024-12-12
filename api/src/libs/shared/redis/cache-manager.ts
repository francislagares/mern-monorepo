import Redis from 'ioredis';

import logger from '@/utils/logger';

import { serverSchema } from '@/config/environment';

export class CacheManager {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: serverSchema.REDIS_HOST,
      port: serverSchema.REDIS_PORT,
      commandTimeout: serverSchema.REDIS_TTL,
    });
  }

  public async getCache(key: string) {
    try {
      const cacheData = await this.redis.get(key);

      return cacheData;
    } catch (err) {
      logger.info('Error getCache()', err);

      return null;
    }
  }

  public async setCache(
    key: string,
    data: unknown,
    ttl = serverSchema.REDIS_TTL,
  ) {
    try {
      return await this.redis.set(key, JSON.stringify(data), 'EX', ttl);
    } catch (err) {
      logger.info('Error setCache()', err);

      return null;
    }
  }

  public async removeCache(key: string) {
    try {
      return await this.redis.del(key);
    } catch (err) {
      logger.info('Error removeCache()', err);

      return null;
    }
  }
}

export const cacheManager = new CacheManager();
