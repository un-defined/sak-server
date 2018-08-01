import { Application } from 'egg';
import { RemoteRequest } from "./lib/request";

export default (app: Application) => {
  app.beforeStart(async () => {
    console.log('Hey.')
    app.remoteRequest = new RemoteRequest(app)
  })
}