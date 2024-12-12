import { Application } from 'express';

import { serverSchema } from '@/config/environment';

import { healthRoutes } from './health.router';

const applicationRoutes = (app: Application) => {
  const routes = () => {
    app.use(serverSchema.BASE_URL, healthRoutes.getRoutes());
  };

  routes();
};

export default applicationRoutes;
