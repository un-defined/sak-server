import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class NotImplementedException extends HttpException {
  constructor(message?: string | object | any, error = 'Not Implemented') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.NOT_IMPLEMENTED),
      HttpStatus.NOT_IMPLEMENTED
    )
  }
}
