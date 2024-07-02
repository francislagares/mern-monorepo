import express, { Application } from 'express';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

import { App } from 'api/src/app';
import HealthController from 'api/src/controllers/health.controller';

describe('HealthController', () => {
  let app: Application;

  beforeAll(() => {
    app = new App(express()).getServer();

    const controller = new HealthController();
    app.get('/health', controller.getHealth);
  });

  it('GET /health should return status 200 and { health: "OK!" } when GET /health', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ health: 'OK!' });
  });
});
