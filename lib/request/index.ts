import { request } from './provider'
import { Application } from 'egg'
import { RemoteBusinessException, /* BusinessErrorException */ } from '../exceptions'

type coreRet = { retCode: string, retMsg: string, data: any, [propName: string]: any }

export class RemoteRequest {
  app
  constructor(app: Application) {
    this.app = app
  }

  async postFake(url, reqBody, describe): Promise<coreRet> {
    let ret
    try {
      ret = await request(this.app).post({
        url,
        body: JSON.stringify(reqBody)
      })
      ret = JSON.parse(ret)
    } catch (e) {
      throw new RemoteBusinessException(`请求核心系统-${describe} <错误>:${e}`)
    }

    if (ret && ret.retCode !== '000000') {
      this.app.logger.warn(`请求核心系统-${describe} <异常>[${ret.retCode}]:${ret.retMsg}`)
    }
    return ret
  }
}