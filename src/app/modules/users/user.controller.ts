import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import catAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    sendResponse(res, {
      statuscode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
    next();
  },
);

export const UserController = {
  createUser,
};
