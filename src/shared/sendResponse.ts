import { Response } from 'express';

type IApiResponse<T> = {
  statuscode: number;
  success: boolean;
  message?: string | null;
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statuscode: data.statuscode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null,
    data: data.data || null,
  };
  res.status(data.statuscode).json({ responseData });
};

export default sendResponse;
