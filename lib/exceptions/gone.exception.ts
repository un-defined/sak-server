import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class GoneException extends HttpException {
  constructor(message?: string | object | any, error = 'Gone') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.GONE),
      HttpStatus.GONE
    )
  }
}
