import { HttpStatus, getStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class CommonException extends HttpException {

  /**
   * 通用业务错误
   * @param {string} message 枚举码
   * @param error 可选，错误描述
   */
  constructor(message: string, error = 'Common Error') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.OK, getStatus('COMMON_ERROR').code),
      HttpStatus.OK
    )
  }
}
