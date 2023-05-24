import express, { Router } from 'express';

import HealthController from '@/controllers/health.controller';

export class HealthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public getRoutes(): Router {
    const controller = new HealthController();

    this.router.get('/health', controller.getHealth);

    return this.router;
  }
}

export const healthRoutes = new HealthRoutes();
