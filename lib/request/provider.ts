/**
 * promise-request
 */
import * as rp from 'request-promise'
import { _, Debug } from '../'
import { Application } from 'egg'

const debug = Debug('wk: request-logger')
let debugId = 0
const requestParams = {}

// 日志记录器
const loggerHelper = (request, debugFlag, log) => {
  if (!debugFlag) { return }

  log = log || debug
  let proto

  // debug('loggerHelper - request', request)
  if (request.Request) {
    proto = request.Request.prototype
  } else if (request.get && request.post) {
    // The object returned by request.defaults() doesn't include the
    // Request property, so do this horrible thing to get at it.  Per
    // Wikipedia, port 4 is unassigned.
    const req = request('http://localhost:4').on('error', () => { return })
    proto = req.constructor.prototype
  } else {
    throw new Error(
      'Pass the object returned by require("request") to this function.'
    )
  }
  if (proto._initBeforeDebug) {
    return
  }

  proto._initBeforeDebug = proto.init
  proto.init = function () {
    if (this._debugId) { return }
    this
      .on('request', _req => {
        // debug('EVENT REQUEST')
        Object.assign(this._requestParams, {
          debugId: this._debugId,
          reqUrl: this.uri.href,
          reqMethod: this.method,
          reqHeaders: _.clone(this.headers),
          reqBody: this.body ? this.body.toString('utf8') : undefined,
          // reqDes: this.headers.CustomDescription
        })
        // log('request', data)
      })
      .on('response', res => {
        // debug('EVENT RESPONSE')
        if (this.callback) {
          // callback specified, request will buffer the body for
          // us, so wait until the complete event to do anything
        } else {
          // cannot get body since no callback specified
          Object.assign(this._requestParams, {
            resStatusCode: res.statusCode,
            resHeaders: _.clone(res.headers),
          })
          log('response', this._requestParams)
        }
      })
      .on('complete', (res, _body) => {
        // debug('EVENT COMPLETE')
        if (this.callback) {
          Object.assign(this._requestParams, {
            resStatusCode: res.statusCode,
            resHeaders: _.clone(res.headers),
            resBody: res.body,
          })
          log('response', this._requestParams)
        }
      })
      .on('redirect', () => {
        // debug('EVENT REDIRECT')
        const type = this.response.statusCode === 401 ? 'auth' : 'redirect'
        Object.assign(this._requestParams, {
          resStatusCode: this.response.statusCode,
          resHeaders: _.clone(this.response.headers),
        })
        log(type, this._requestParams)
      })

    this._debugId = ++debugId
    this._requestParams = requestParams
    return proto._initBeforeDebug.apply(this, arguments)
  }
}

/**
 * 封装request
 */
export const request = (app: Application) => {
  // 开关
  const debugFlag = app.config.httpRequest.logRequest
  // request 配置
  rp.defaults({
    json: true,
    time: true,
    timeout: 5 * 1000,
  })

  loggerHelper(rp, debugFlag, (type, data) => {
    data = _.pick(data, app.config.httpRequest.logParams)
    switch (type) {
      case 'response':
        // app.logger.info(`[remote-request] - <${data.reqDes}> - ${data.reqUrl}\n`, data)
        app.logger.info(`[remote-request] - ${data.reqUrl}\n`, data)
        break
      case 'redirect':
        // app.logger.info(`[remote-redirect] - <${data.reqDes}> - ${data.reqUrl}\n`, data)
        app.logger.info(`[remote-redirect] - ${data.reqUrl}\n`, data)
        break
      default:
        break
    }
  })

  return rp
}
