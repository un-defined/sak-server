import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class NotAcceptableException extends HttpException {
  constructor(message?: string | object | any, error = 'Not Acceptable') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.NOT_ACCEPTABLE),
      HttpStatus.NOT_ACCEPTABLE
    )
  }
}
