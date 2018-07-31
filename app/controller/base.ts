import { Controller } from 'egg';

export default class BaseController extends Controller {

  constructor(args) {
    super(args)
  }

  success(data?, status?: number) {
    if (status) {
      this.ctx.status = status
    }

    // buffer 对buffer的扩展
    if (Buffer.isBuffer(data)) {
      data = JSON.parse(data.toString('utf-8'))
    }

    this.ctx.body = {
      status: 'success',
      msg: 'success',
      code: '000000',
      data
    }
  }
  
}