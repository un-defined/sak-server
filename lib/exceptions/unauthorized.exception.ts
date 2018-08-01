import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class UnauthorizedException extends HttpException {
  constructor(message?: string | object | any, error = 'Unauthorized') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.UNAUTHORIZED),
      HttpStatus.UNAUTHORIZED
    )
  }
}
