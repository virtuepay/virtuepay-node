// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';

// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
// app_id 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 查询列表
 */
virtuePay.batchTransfers.list(
  { page: 1, per_page: 3, app: APP_ID },
  function(err, batchTransfers) {
    if (err != null) {
      console.log('virtuePay.batchTransfers.list failed: ', err);
    } else {
      console.log(batchTransfers);
    }
    // YOUR CODE
  }
);
