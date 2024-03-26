import { Request, Response, NextFunction, RequestHandler } from 'express';

const catAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export default catAsync;
