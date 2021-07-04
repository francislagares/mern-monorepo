import request from 'supertest';
import { app } from '../app';

describe('App Index', () => {
  test('[GET] / with response statusCode 200', async () => {
    await request(app).get('/').expect(200);
  });
});
