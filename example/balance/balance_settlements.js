// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn) -> 点击管理平台右上角公司名称 -> 企业面板 -> 开发参数 -> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn) -> 点击你创建的应用 -> 应用首页 -> 应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/* eslint no-unused-vars: off */

/**
 * 查询余额结算列表
 */
virtuePay.balanceSettlements.list(
  APP_ID,
  { page: 1, per_page: 3 },
  function (err, data) {
    if (err != null){
      console.log('failed: ', err);
    }
    // YOUR CODE
    console.log(data);
  }
);

/**
 * 查询账户余额明细对象
 */
virtuePay.balanceSettlements.retrieve(
  APP_ID,
  '670180130750711562240001', // Balance Settlement ID
  function(err, data) {
    if (err != null){
      console.log('failed: ', err);
    }
    // YOUR CODE
  }
);
