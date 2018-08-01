import { HttpStatus, HttpCode, HttpCodeDes } from '../enums'
import { createHttpExceptionBody } from './helper'
import { HttpException } from './http.exception'

export class FlowException extends HttpException {
  constructor(message?: string | object | any, error = 'FLOW_ERROR') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.FLOW_ERROR, error,  HttpStatus.OK, HttpCode.FLOW_ERROR),
      HttpStatus.OK
    )
  }
}

export class ParamsErrorException extends HttpException {
  constructor(message?: string | object | any, error = 'PARAMS_ERROR') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.PARAMS_ERROR, error, HttpStatus.OK, HttpCode.PARAMS_ERROR),
      HttpStatus.OK
    )
  }
}

export class DBDataInvalidException extends HttpException {
  constructor(message?: string | object | any, error = 'DB_DATA_INVALID') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.PARAMS_ERROR, error, HttpStatus.OK, HttpCode.PARAMS_ERROR),
      HttpStatus.OK
    )
  }
}

export class InvalidFieldException extends HttpException {
  constructor(message?: string | object | any, error = 'INVALID_FIELD') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.INVALID_FIELD, error, HttpStatus.OK, HttpCode.INVALID_FIELD),
      HttpStatus.OK
    )
  }
}

export class InnerServiceInvalidException extends HttpException {
  constructor(message?: string | object | any, code?: string, error = 'INNER_SERVICE_INVALID') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.INVALID_FIELD, error, HttpStatus.OK, code),
      HttpStatus.OK
    )
  }
}

export class InnerServiceErrorException extends HttpException {
  constructor(message?: string | object | any, code?: string, error = 'INNER_SERVICE_ERROR') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.INVALID_FIELD, error, HttpStatus.OK, code || HttpCode.INNER_FAIL ),
      HttpStatus.OK
    )
  }
}

export class RunCheckRulesFailedException extends HttpException {
  constructor(message?: string | null, data?: object, error = 'RUN_CHECK_RULES_FAILED') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.RUN_CHECK_RULES_FAILED, error, HttpStatus.OK, HttpCode.RUN_CHECK_RULES_FAILED, data),
      HttpStatus.OK
    )
  }
}

export class CoreServiceErrorException extends HttpException {
  constructor(message?: string | null, data?: object, error = 'CORE_SERVICE_ERROR') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.CORE_SERVICE_FAIL, error, HttpStatus.OK, HttpCode.CORE_SERVICE_FAIL, data),
      HttpStatus.OK
    )
  }
}

export class BusinessErrorException extends HttpException {
  constructor(message?: string | null, data?: object, error = 'BUSINESS_SERVICE_ERROR') {
    super(
      createHttpExceptionBody(message || HttpCodeDes.BUSINESS_SERVICE_ERROR, error, HttpStatus.OK, HttpCode.BUSINESS_SERVICE_ERROR, data),
      HttpStatus.OK
    )
  }
}
