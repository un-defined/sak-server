import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class ServiceUnavailableException extends HttpException {
  constructor(message?: string | object | any, error = 'Service Unavailable') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.SERVICE_UNAVAILABLE),
      HttpStatus.SERVICE_UNAVAILABLE
    )
  }
}
