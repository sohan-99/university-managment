import { Request, Response } from 'express';
import catAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester = catAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result =
    await AcademicSemesterService.createSemester(academicSemesterData);
  res.status(200).json({
    success: true,
    message: 'Academic Semester is created successfully!',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
};
