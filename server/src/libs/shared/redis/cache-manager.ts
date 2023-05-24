import { REDIS_HOST, REDIS_PORT, REDIS_TTL } from '@/config/environment';

import Redis from 'ioredis';

export class CacheManager {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: REDIS_HOST,
      port: REDIS_PORT,
      commandTimeout: REDIS_TTL,
    });
  }

  public async getCache(key: string) {
    try {
      const cacheData = await this.redis.get(key);
      return cacheData;
    } catch (err) {
      return null;
    }
  }

  public setCache(key: string, data: unknown, ttl = REDIS_TTL) {
    try {
      this.redis.set(key, JSON.stringify(data), 'EX', ttl);
    } catch (err) {
      return null;
    }
  }

  public removeCache(key: string) {
    try {
      this.redis.del(key);
    } catch (err) {
      return null;
    }
  }
}

export const cacheManager = new CacheManager();
