import { Application } from 'express';

import { BASE_URL } from '@/config/environment';

import { healthRoutes } from './health.router';

const applicationRoutes = (app: Application) => {
  const routes = () => {
    app.use(BASE_URL, healthRoutes.getRoutes());
  };

  routes();
};

export default applicationRoutes;
