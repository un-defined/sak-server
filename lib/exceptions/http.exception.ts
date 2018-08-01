export class HttpException {
  isProjectException = true
  private readonly message: string | object
  /**
   * The base Nest Application exception, which is handled by the default Exceptions Handler.
   * If you throw an exception from your HTTP route handlers, Nest will map them to the appropriate HTTP response and send to the client.
   *
   * When `response` is an object:
   * - object will be stringified and returned to the user as a JSON response,
   *
   * When `response` is a string:
   * - Nest will create a response with two properties:
   * ```
   * message: response,
   * statusCode: X
   * ```
   */
  constructor(
    private readonly response: string | object,
    private readonly status: number
  ) {

    if (typeof response === 'object') {
      // 对象类型控制台错误显示[object Object]， 重写toString()方法美化
      this.response.toString = () => {
        return JSON.stringify(this.response)
      }
    }
    this.message = response
  }

  public getResponse(): string | object {
    return this.response
  }

  public getStatus(): number {
    return this.status
  }
}
