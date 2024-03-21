/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
const app: Application = express();
app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users/', UserRoutes);

// Testing purposes npx prettier --write src/index.ts
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  Promise.reject(new Error('Unhandle Promise Rejection'));
});

// global error handler
app.use(globalErrorHandler);

export default app;
