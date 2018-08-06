import { request } from './provider'
import { Application } from 'egg'
import { RemoteBusinessException, /* BusinessErrorException */ } from '../exceptions'
import { URL } from '../utils/url'

type coreRet = { retCode: string, retMsg: string, data: any, [propName: string]: any }

export class RemoteRequest {
  app
  constructor(app: Application) {
    this.app = app
  }

  async get(url, reqBody, describe): Promise<coreRet> {
    let ret
    try {
      ret = await request(this.app).get({
        url: URL[url],
        qs: reqBody,
        json: true
      })
    } catch (e) {
      throw new RemoteBusinessException(`请求外围系统-${describe} <错误>:${e}`)
    }

    // if (ret && ret.code !== 0) {
    //   this.app.logger.warn(`请求外围系统-${describe} <异常>[${ret.resStatusCode}]:${ret.resBody}`)
    // }
    return ret/* .data */
  }
}