import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class RequestTimeoutException extends HttpException {
  constructor(message?: string | object | any, error = 'Request Timeout') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.REQUEST_TIMEOUT),
      HttpStatus.REQUEST_TIMEOUT
    )
  }
}
