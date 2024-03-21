class ApiError extends Error {
  statuscode: number;
  message: string;
  stack: string;

  constructor(statuscode: number, message: string, stack: string = '') {
    super(message); // Call the super constructor with the error message
    this.name = 'ApiError';
    this.statuscode = statuscode;
    this.message = message;
    this.stack = stack;
  }
}

export default ApiError;
