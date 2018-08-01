/**
 * 用户相关错误
 */
import { HttpStatus, getStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class ImageException extends HttpException {

  /**
   * 通用业务错误
   * @param {string} message 枚举码
   * @param error 可选，错误描述
   */
  constructor(message: string, error = 'User relevance') {
    const httpCodeEnum = getStatus(message)
    super(
      createHttpExceptionBody(httpCodeEnum.msg, error, HttpStatus.OK, httpCodeEnum.code),
      HttpStatus.OK
    )
  }
}
