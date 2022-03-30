// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com) -> 点击管理平台右上角公司名称 -> 企业面板 -> 开发参数 -> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.pingxx.com) -> 点击你创建的应用 -> 应用首页 -> 应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/* 查询列表 */
virtuePay.agreements.list(
  { app: APP_ID, // 该参数必填
    per_page: 3, },
  function(err, agreements) {
    if (err != null) {
      console.log('virtuePay.agreements.list failed: ', err);
    } else {
      console.log(agreements);
    }
    // YOUR CODE
  }
);
