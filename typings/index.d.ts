import { RemoteRequest } from '../lib/request'

declare module 'egg' {

  interface Application {
    remoteRequest: RemoteRequest
  }

}