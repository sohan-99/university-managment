import { IGenericErrorMessage } from './error';

export type IGenericResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};
