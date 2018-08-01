import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class MethodNotAllowedException extends HttpException {
  constructor(message?: string | object | any, error = 'Method Not Allowed') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.METHOD_NOT_ALLOWED),
      HttpStatus.METHOD_NOT_ALLOWED
    )
  }
}
