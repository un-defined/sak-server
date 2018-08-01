import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class BadRequestException extends HttpException {
  constructor(message?: string | object | any, error = 'Bad Request') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST
    )
  }
}
