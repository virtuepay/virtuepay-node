// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/* 查询列表 */
virtuePay.transfers.list(
  { limit: 3, app: { id: APP_ID }},
  function(err, transfers) {
    if (err != null) {
      console.log('virtuePay.transfers.list failed: ', err);
    } else {
      console.log(transfers);
    }
    // YOUR CODE
  }
);
