import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class PayloadTooLargeException extends HttpException {
  constructor(message?: string | object | any, error = 'Payload Too Large') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.PAYLOAD_TOO_LARGE),
      HttpStatus.PAYLOAD_TOO_LARGE
    )
  }
}
