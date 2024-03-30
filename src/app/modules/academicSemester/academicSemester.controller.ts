import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableFields } from './academicSemester.constant';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;

    const result =
      await AcademicSemesterService.createSemester(academicSemesterData);

    sendResponse<IAcademicSemester>(res, {
      statuscode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully!',
      meta: result.meta,
      data: result,
    });

    next();
  },
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableFields);

    const paginationOptions = pick(req.query, paginationFields);

    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions,
    );

    sendResponse<IAcademicSemester[]>(res, {
      statuscode: httpStatus.OK,
      success: true,
      message: 'Semesters retrieved successfully !',
      meta: result.meta,
      data: result.data,
    });
    next();
  },
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await AcademicSemesterService.getSingleSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statuscode: httpStatus.OK,
      success: true,
      message: 'Semesters retrieved successfully !',
      data: result,
    });
    next();
  },
);

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await AcademicSemesterService.updateSemester(id, updatedData);

  sendResponse<IAcademicSemester>(res, {
    statuscode: httpStatus.OK,
    success: true,
    message: 'Academic Semester updated successfully !',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
};
