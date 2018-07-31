import { Application } from 'egg';
import { RouterHandle } from '../lib/decorators/router.decorator'

export default (app: Application) => {
  const { controller, router } = app;
  RouterHandle(app)
  router.get('/', controller.home.index);
};
