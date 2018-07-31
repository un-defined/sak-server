import BaseController from './base'
import { Get, Prefix } from '../../lib';

@Prefix('/api/user', 'UserController')
export default class UserController extends BaseController {
  
  @Get('/test')
  async test() {
    this.success({
      msg: 'yeah'
    })
  }
}