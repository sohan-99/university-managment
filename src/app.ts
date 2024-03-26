import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();
app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semester', AcademicSemesterRoutes);
app.use('/api/v1/', routes);

// Testing purposes npx prettier --write src/index.ts
// app.get('/',(req: Request, res: Response, next: NextFunction) => {
//  console.log(x);
// });

// global error handler
app.use(globalErrorHandler);

export default app;
