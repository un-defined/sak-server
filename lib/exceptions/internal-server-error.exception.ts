import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class InternalServerErrorException extends HttpException {
  constructor(
    message?: string | object | any,
    error = 'Internal Server Error'
  ) {
    super(
      createHttpExceptionBody(message, error, HttpStatus.INTERNAL_SERVER_ERROR),
      HttpStatus.INTERNAL_SERVER_ERROR
    )
  }
}
