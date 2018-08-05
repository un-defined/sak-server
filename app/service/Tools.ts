import { Service } from 'egg';
import { getClientIp } from "request-ip";

/**
 * Tools Service
 */
export default class Tools extends Service {

  /**
   * get client's ip detail
   * @param req - context req object
   */
  public async getClientIpDetail(req: any) {
    const clientIp = getClientIp(req);
    const detail = await this.app.remoteRequest.post('GET_CLIENT_IP_DETAIL', { ip: clientIp }, `Get client's ip detail through taobao.`);
    return detail;
  }
}
