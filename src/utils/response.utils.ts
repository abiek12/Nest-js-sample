import { HttpStatus } from '@nestjs/common';

export function successResponse<T>(
  statusCode: number = HttpStatus.OK,
  data: T,
  message: string = 'Successful',
): {
  success: boolean;
  statusCode: number;
  data: T;
  message: string;
} {
  return {
    success: true,
    statusCode,
    data,
    message,
  };
}

export function errorResponse(
  statusCode: number = HttpStatus.BAD_REQUEST,
  message: string,
  code: string = 'ERROR',
  details: any = null,
): {
  success: boolean;
  statusCode: number;
  error: {
    message: string;
    code: string;
    details: any;
  };
} {
  return {
    success: false,
    statusCode,
    error: {
      message,
      code,
      details,
    },
  };
}
