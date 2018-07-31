import { Controller, Context } from 'egg'

interface bpItem {
    httpMethod: string
    constructor: Function
    handler: string
}

interface BeforeFunction {
    (ctx: Context, instance: Controller): Boolean | undefined
}

export interface blueprint {
    restfulClass(url: string, before?: BeforeFunction): any
    getRoute(): any
    setRouter(urls: string, bp: bpItem): void
    scanController(): void
}

export interface Post {
  /**
   * http post method
   * @param url
   */
  (url: string, before?: BeforeFunction): PropertyDecorator
}

export interface Get {
  /**
   * http get method
   * @param url
   */
  (url: string, before?: BeforeFunction): PropertyDecorator
}

export interface Put {
  /**
   * http put method
   * @param url
   */
  (url: string, before?: BeforeFunction): PropertyDecorator
}

export interface Del {
  /**
   * http delete method
   * @param url
   */
  (url: string, before?: BeforeFunction): PropertyDecorator
}

export interface Prefix {
  (url: string, controllerName: string): any
}

interface RouterOptions {
    prefix: string
}

interface Initor {
    (app: any, options?: RouterOptions): void
}

export const bp: blueprint
export const RouterHandle: Initor

export const Post: Post
export const Get: Get
export const Put: Put
export const Del: Del
export const Prefix: Prefix