import BaseController from './base'
import { Get, Prefix } from '../../lib';

Prefix('/api/user', 'UserController')
export default class UserController extends BaseController {
  
  @Get('/test')
  async test() {
    this.logger.info('CTX.request: ', JSON.stringify(this.ctx.request))
    this.success({
      msg: 'yeah'
    })
  }
}