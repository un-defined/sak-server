import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class NotFoundException extends HttpException {
  constructor(message?: string | object | any, error = 'Not Found') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.NOT_FOUND),
      HttpStatus.NOT_FOUND
    )
  }
}
