import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result =
      await AcademicSemesterService.createSemester(academicSemesterData);

    sendResponse<IAcademicSemester>(res, {
      statuscode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully!',
      data: result,
    });
    next();
  },
);

const getAllSemesters = catchAsync(
  async (
    req: Request,
    //  res: Response,
    //  next: NextFunction
  ) => {
    //  const paginationOptions = {
    //    page: Number(req.query.page),
    //    limit: Number(req.query.limit),
    //    sortBy: req.query.sortBy,
    //    sortOrder: req.query.sortOrder,
    //  };
    const paginationOptions = pick(req.query, paginationFields);
    console.log(paginationOptions);
    //  const result =
    //    await AcademicSemesterService.getAllSemesters(paginationOptions);
    //  sendResponse<IAcademicSemester>(res, {
    //    statuscode: httpStatus.OK,
    //    success: true,
    //    message: 'Semesters retired successfully !',
    //    data: result,
    //  });
    //  next();
  },
);
export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
