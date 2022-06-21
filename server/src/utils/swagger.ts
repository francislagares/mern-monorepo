import { Express, Request, Response } from 'express';
import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import logger from '../utils/logger';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.1',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:8000',
    },
  ],
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export const swaggerDocs = (app: Express, port: number) => {
  // Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get('/docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  logger.info(`Docs available at http://localhost:${port}/docs`);
};

export default swaggerDocs;
