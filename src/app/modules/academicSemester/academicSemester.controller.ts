import { NextFunction, Request, Response } from 'express';
import catAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';

const createSemester = catAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result =
      await AcademicSemesterService.createSemester(academicSemesterData);
    next();
    sendResponse(res, {
      statuscode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully!',
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createSemester,
};
