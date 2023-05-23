import request from 'supertest';

import { app } from '@/app';

describe('App Index', () => {
  test('[GET] / with response statusCode 200', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });
});
