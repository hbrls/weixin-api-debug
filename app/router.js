'use strict';

module.exports = app => {
  app.get('/', 'view.index');
  app.get('/oauth', 'view.oauth');

  app.get('/api/message-in', 'api.messageInVerify');
  app.post('/api/message-in', 'api.messageIn');
  app.post('/api/pay-notify', 'api.payNotify');

  app.post('/private-api/oauth/snsapi-base:url', 'api.url');
  app.get('/private-api/oauth/snsapi-base', 'api.oauth');

  app.get('/private-api/jssdk/config', 'api.jsConfig');

  app.post('/private-api/create-jsapi-order', 'api.createJsapiOrder');

  // v2
  app.post('/wechatpivot/api/apps/:alias/oauth-snsapi-base-url', 'apiv2.base');
  app.get('/wechatpivot/apps/:alias/oauth', 'viewv2.oauth');
  app.get('/wechatpivot/api/apps/:alias/oauth-snsapi-base', 'apiv2.oauth');
};
