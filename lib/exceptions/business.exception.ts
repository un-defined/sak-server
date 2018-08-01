/**
 * 业务错误
 */
import { HttpStatus, getStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class BusinessException extends HttpException {
  /**
   * 通用业务错误
   * @param {string} message 错误描述
   * @param {string} code 错误码
   */
  constructor(message: string, code?: string, data?: object) {
    super (
      createHttpExceptionBody(message, 'Business Error', HttpStatus.OK, code ? code : (data ? '800011' : '800001'), data),
      HttpStatus.OK,
    )
  }
}

export class RemoteBusinessException extends HttpException {
  /**
   * 通用远端业务错误
   * @param {string} code 错误码
   * @param {string} message 错误描述
   */
  constructor(message: string, data?: object) {
    super (
      createHttpExceptionBody(message, 'Remote Business Error', HttpStatus.OK, data ? '800012' : '800002', data),
      HttpStatus.OK,
    )
  }
}
