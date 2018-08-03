import { Service } from 'egg';
import { getClientIp } from "../../lib";

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}. From ${getClientIp(this.ctx.req)}`;
  }
}
