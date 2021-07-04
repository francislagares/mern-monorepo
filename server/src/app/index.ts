import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from '../routes';

const app = express();

// Middlewares...
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes...
app.use('/', indexRouter);

export { app };
