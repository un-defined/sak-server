
/**
 * 请求code文件
 * 请求返回码
 */
/**
 * 贷后管理系统的状态码
 */
 export enum plmsCode {
  SUCCESS = '000000',
  PLMS_PARAMS_ERROR = '000002',
  TOO_MUCH_PSD_ERROR = '000105',
  UN_LOGIN = '000103',
  TOKEN_EXPIRES = '000104',
  INVALID_PASSWORD_OR_USERNAME = '000101',
  FIRST_TIME_LOGIN = '000102',
  PARAMS_ERROR = '000001',
  INVALID_TOKEN = '000403',
  PLMS_SYSTEM_ERROR = '111111'
 }

/*****************************
 * Image system code.
 */
export enum imageCode {
  SUCCESS = 'success',
  FAILD = 'fail'
}

 /**
  * wk--http-code
  */
export enum HttpCode {
  SUCCESS = '000000',
  INVALID_PASSWORD = '000001',
  INVALID_PASSWORD_OR_USERNAME = '000002',
  INVALID_USERNAME = '000003',
  TOKEN_EXPIRES = '000004',
  INVALID_TOKEN = '000005',
  TOKEN_NOT_EXIET = '000008',
  FIRST_TIME_LOGIN = '000006',
  PARAMS_ERROR = '000007',
  TOO_MUCH_PSD_ERROR = '000009',
  PLMS_SYSTEM_ERROR = '000010',
  PLMS_PARAMS_ERROR = '000011',
  UN_LOGIN = '000012',
  OLD_PASSWORD_ERROR = '000013',
  COMMON_ERROR = '111111',
  UNKNOW_ERROR = '000100',
  INVALID_FIELD = '000400',
  FLOW_ERROR = '000401',
  RUN_CHECK_RULES_FAILED = '000402',
  DB_DATA_INVALID = '000403',
  INNER_FAIL = '000500',
  HANGUP_LIMITED = '000021',
  NOT_EXIST_TASK = '000022',
  CORE_SERVICE_FAIL = '000600',
  BUSINESS_SERVICE_ERROR = '000700'
}

/**
 * wk--http-code-description
 */
export enum HttpCodeDes {
  SUCCESS = '成功',
  INVALID_PASSWORD = '密码错误',
  INVALID_PASSWORD_OR_USERNAME = '用户名不存在或密码错误',
  INVALID_USERNAME = '用户名不存在',
  TOKEN_EXPIRES = 'token已经过期, 请重新登录',
  INVALID_TOKEN = 'token不合法',
  TOKEN_NOT_EXIET = 'token不存在',
  FIRST_TIME_LOGIN = '用户第一次登录，需要修改密码',
  PARAMS_ERROR = '请求参数不合法',
  UNKNOW_ERROR = '第三方系统未知错误',
  TOO_MUCH_PSD_ERROR = '密码错误超过次数限制，已被锁定',
  PLMS_SYSTEM_ERROR = '贷后管理系统错误',
  PLMS_PARAMS_ERROR = '请求贷后系统参数错误',
  UN_LOGIN = '用户未登录',
  FAILD = '请求影像系统失败',
  INVALID_FIELD = '字段验证未通过',
  FLOW_ERROR = '流程流转异常',
  RUN_CHECK_RULES_FAILED = '运行校验规则未通过',
  INNER_FAIL= '请求内评系统失败',
  HANGUP_LIMITED = '挂起任务数量超限',
  NOT_EXIST_TASK = '当前没有任务处理',
  CORE_SERVICE_FAIL = '请求核心系统失败',
  BUSINESS_SERVICE_ERROR = '业务逻辑错误',
  DB_DATA_INVALID = '数据库数据异常'
}

/**
 *
 * @param codeDes code对应枚举码
 */
export function getStatus (codeDes: string) {
  return {
    code: HttpCode[codeDes.toUpperCase()],
    msg: HttpCodeDes[codeDes.toUpperCase()]
  }
}
