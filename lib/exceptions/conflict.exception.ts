import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class ConflictException extends HttpException {
  constructor(message?: string | object | any, error = 'Conflict') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.CONFLICT),
      HttpStatus.CONFLICT
    )
  }
}
