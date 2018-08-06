import { Service } from 'egg';
import { getClientIp } from "request-ip";

/**
 * Tools Service
 */
export default class Tools extends Service {

  get REQUEST() {
    return this.app.remoteRequest.get
  }

  /**
   * get client's ip detail
   * @param req - context req object
   */
  public async getClientIpDetail(req: any) {
    const clientIp = getClientIp(req);
    const { data } = await this.REQUEST('GET_CLIENT_IP_DETAIL', { ip: clientIp }, `Get client's ip detail through taobao.`);
    return data;
  }

  public async translate() {
    const { word } = this.ctx.query;
    const result = await this.REQUEST('TRANSLATE', { word }, `Translate via online api.`);
    return result;
  }
}
