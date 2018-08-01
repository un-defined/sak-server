// 请求成功，参数错误返回提示，返回msg自定义
import { HttpStatus } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class ErrorParamTipException extends HttpException {
  constructor(message?: string | object | any, error = 'params error') {
    super(
      createHttpExceptionBody(message, error, HttpStatus.ACCEPTED),
      HttpStatus.ACCEPTED
    )
  }
}
