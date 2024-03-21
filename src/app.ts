import express, { Application } from 'express';
import cors from 'cors';

import { UserRoutes } from './app/modules/users/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();
app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users/', UserRoutes);

// Testing purposes npx prettier --write src/index.ts
// app.get('/',(req: Request, res: Response, next: NextFunction) => {
//  console.log(x);
// });

// global error handler
app.use(globalErrorHandler);

export default app;
