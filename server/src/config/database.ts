import { database } from '@/libs/shared/prisma/prisma';
import logger from '@/utils/logger';

export class MongoDBInstance {
  private static instance: MongoDBInstance;
  private database: typeof database;

  private constructor() {
    this.database = database;
    this.getDbConnection();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new MongoDBInstance();
    }
    return this.instance;
  }

  private getDbConnection = () => {
    const connect = async () => {
      await this.database.$connect().then(() => {
        logger.info('Successfully connected to database!');
      });
    };

    connect()
      .then(async () => {
        await this.database.$disconnect();
      })
      .catch(async e => {
        console.log(e);
        await this.database.$disconnect();
        process.exit(1);
      });
  };
}
