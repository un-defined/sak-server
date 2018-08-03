// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Base from '../../../app/controller/base';
import Home from '../../../app/controller/home';
import User from '../../../app/controller/user';
import ToolsIndex from '../../../app/controller/tools/index';

declare module 'egg' {
  interface IController {
    base: Base;
    home: Home;
    user: User;
    tools: {
      index: ToolsIndex;
    };
  }
}
