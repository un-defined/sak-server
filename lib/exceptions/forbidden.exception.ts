import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class ForbiddenException extends HttpException {
  constructor(message?: string | object | any, error = 'Forbidden') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.FORBIDDEN),
      HttpStatus.FORBIDDEN
    )
  }
}
