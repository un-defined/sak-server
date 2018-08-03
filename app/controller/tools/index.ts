import BaseController from '../base'
import { Get, Prefix } from '../../../lib';
import { getClientIp } from 'request-ip';

Prefix('/api/tools', 'ToolsController')
export default class ToolsController extends BaseController {
  
  @Get('/get_client_ip')
  async test() {
    this.success(getClientIp(this.ctx.request))
  }
}