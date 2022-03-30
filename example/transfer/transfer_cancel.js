// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';

// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/* 取消 */
virtuePay.transfers.cancel(
  'tr_uHWX58DanDOGCKOynHvPirfT',
  function(err, transfer) {
    if (err != null) {
      console.log('virtuePay.transfers.cancel failed: ', err);
    } else {
      console.log(transfer);
    }
    // YOUR CODE
  }
);
