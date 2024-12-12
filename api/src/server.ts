import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { ErrorMiddleware } from '@/libs/shared/middlewares/error.middleware';

import logger from '@/utils/logger';

import { MongoDBInstance as dbConnection } from '@/config/database';
import { serverSchema } from '@/config/environment';

import applicationRoutes from '@/routes/index';

export class Server {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.connectDatabase();
    this.securityMiddleware(this.app);
    this.routesMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
    this.initializeSwagger();
  }

  public getServer() {
    return this.app;
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cors({
        origin: serverSchema.CORS_ORIGIN,
        credentials: serverSchema.CORS_CREDENTIALS,
      }),
    );
    app.use(hpp());
    app.use(helmet());
    app.use(compression());
    app.use(json());
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    app.use(cookieParser());
    app.use(
      cors({
        origin: serverSchema.CLIENT_URL,
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: [
          'Origin',
          'X-Requested-With',
          'Content-Type',
          'Accept',
          'Authorization',
          'Access-Control-Allow-Headers',
          'Access-Control-Request-Method',
          'Access-Control-Request-Headers',
        ],
      }),
    );
  }

  private routesMiddleware(app: Application): void {
    applicationRoutes(app);
  }

  private globalErrorHandler(app: Application): void {
    app.use(ErrorMiddleware);
  }

  private connectDatabase(): void {
    dbConnection.getInstance();
  }

  private startServer(app: Application): void {
    logger.info(`------ NODE_ENV: ${serverSchema.NODE_ENV} ------`);
    logger.info(`Server has started with process ${process.pid}`);
    app.listen(serverSchema.PORT, () => {
      logger.info(`Server listening on port ${serverSchema.PORT}`);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        openapi: '3.0.3',
        info: {
          title: 'API Documentation',
          version: '1.0.0',
          description: 'REST API docs',
        },
        servers: [
          {
            url: `${serverSchema.HOST}:${serverSchema.PORT}${serverSchema.BASE_URL}`,
          },
        ],
      },
      apis: ['./swagger.yaml'],
    };

    const swaggerSpecs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

    logger.info(
      `Docs are available at ${serverSchema.HOST}:${serverSchema.PORT}/api-docs`,
    );
  }
}
