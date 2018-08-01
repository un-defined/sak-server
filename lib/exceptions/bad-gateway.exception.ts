import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class BadGatewayException extends HttpException {
  constructor(message?: string | object | any, error = 'Bad Gateway') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.BAD_GATEWAY),
      HttpStatus.BAD_GATEWAY
    )
  }
}
