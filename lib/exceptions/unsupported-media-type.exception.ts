import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class UnsupportedMediaTypeException extends HttpException {
  constructor(
    message?: string | object | any,
    error = 'Unsupported Media Type'
  ) {
    super(
      createHttpExceptionBody(
        message,
        error,
        HttpStatus.UNSUPPORTED_MEDIA_TYPE
      ),
      HttpStatus.UNSUPPORTED_MEDIA_TYPE
    )
  }
}
