import BaseController from '../base'
import { Get, Prefix } from '../../../lib';

Prefix('/api/tools', 'ToolsController')
export default class ToolsController extends BaseController {
  get SERVICE() {
    return this.ctx.service.tools
  }
  
  @Get('/get_client_ip')
  async getClientIp() {
    const detail = await this.SERVICE.getClientIpDetail(this.ctx.request);
    this.success(detail);
  }
}