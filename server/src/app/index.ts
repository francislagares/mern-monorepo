import 'module-alias/register';
import compression from 'compression';
import cors from 'cors';
import express, { RequestHandler } from 'express';
import helmet from 'helmet';

import indexRouter from '@/routes/indexRouter';

const app = express();

// Middlewares...
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression() as RequestHandler);

// Routes...
app.use('/', indexRouter);

export { app };
