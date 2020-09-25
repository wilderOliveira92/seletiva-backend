import 'reflect-metadata';
import 'dotenv/config';

import { errors } from 'celebrate';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from '@shared/infra/http/routes';
import uploadConfig from '@config/upload';
import '@shared/infra/typeorm';

import AppError from '@shared/errors/appError';
import rateLimiter from './middlewares/rateLimiter';

import '@shared/container';

const app = express();
app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.tmpFolder));
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333!');
});
