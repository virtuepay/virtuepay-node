'use strict';
// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn) -> 点击管理平台右上角公司名称 -> 企业面板 -> 开发参数 -> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';

var http = require('http');
var _url = require('url');
var virtuePay = require('../lib/virtuePay')(API_KEY);
http.createServer(function (req, res) {
  var urlParts = _url.parse(req.url, true);
  switch (urlParts.pathname) {
  case '/oauth': // 跳转到微信进行认证
    var oauthUrl = virtuePay.wxOAuth.createOauthUrlForCode('WX_PUB_APP_ID', 'http://example.com/getopenid?showwxpaytitle=1');
    res.writeHead(302, {
      'Location': oauthUrl
    });
    res.end('');
    break;
  case '/getopenid': // 回调地址，获取 openid
    virtuePay.wxOAuth.getOpenid('WX_PUB_APP_ID', 'WX_PUB_APP_SECRET', urlParts.query.code, function(err, res) {
      console.log(res.openid);
      // ...
      // pass openid to extra['open_id'] and create a charge
      // ...
    });
    break;
  case '/signature': // 微信公众号获取签名
    virtuePay.wxOAuth.getJsapiTicket('WX_PUB_APP_ID', 'WX_PUB_APP_SECRET', function(e, response){
      // response['ticket'] 是获得的 jsapi_ticket，有效期为 7200 秒，需在自己的服务器全局缓存。
      var charge = {/* 准备支付的 charge */};
      var signature = virtuePay.wxOAuth.getSignature(charge, response['ticket'], 'PAY_PAGE_URL');
      res.writeHead(200);
      res.end(signature);
    });
    break;
  default:
    res.writeHead(404);
    res.end('');
    break;
  }
}).listen(80, '0.0.0.0');
