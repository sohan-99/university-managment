import express, { Application } from 'express';
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

// app.get('/',(_req: Request, res: Response) => {
//   res.send('Ore Baba Error')
// })

// global error handler
app.use(globalErrorHandler);

export default app;
