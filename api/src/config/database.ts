import { MongoClient, ServerApiVersion } from 'mongodb';

import logger from '@/utils/logger';

import { serverSchema } from '@/config/environment';

export class MongoDBInstance {
  private static instance: MongoDBInstance;
  private client: MongoClient | null = null;

  private constructor() {
    this.connectToDatabase();
  }

  public static getInstance(): MongoDBInstance {
    if (!this.instance) {
      this.instance = new MongoDBInstance();
    }

    return this.instance;
  }

  private async connectToDatabase(): Promise<void> {
    if (!serverSchema.DATABASE_URL) {
      logger.error('Database URL is not defined!');

      return;
    }

    try {
      if (!this.client) {
        this.client = new MongoClient(serverSchema.DATABASE_URL, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          },
        });

        await this.client.connect();
        logger.info('Successfully connected to the database!');
      }
    } catch (error) {
      console.log('Error connecting to the MongoDB database:', error);
    }
  }

  public getClient(): MongoClient | null {
    return this.client;
  }

  public getDb(dbName: string): ReturnType<MongoClient['db']> | null {
    if (!this.client) {
      logger.error('MongoDB client is not initialized!');

      return null;
    }

    return this.client.db(dbName);
  }

  public async closeConnection(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;

      logger.info('Database connection closed.');
    }
  }
}
