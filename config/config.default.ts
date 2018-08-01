import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532056540994_848';

  // add your config here
  config.middleware = [];

  config.security = { csrf: { enable: false } }

  // 请求日志
  config.httpRequest = {
    logRequest: true,
    logParams: [
      'debugId',              // 链路ID
      'reqUrl',               // 请求URL
      'reqMethod',            // 请求方法
      // 'reqHeaders',           // 请求头
      'reqBody',              // 请求体
      'resStatusCode',        // 响应状态码
      // 'resHeaders',           // 响应头
      'resBody',              // 响应体
      'reqDes',               // 请求描述
    ],
  }

  return config;
};
