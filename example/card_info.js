// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn) -> 点击管理平台右上角公司名称 -> 企业面板 -> 开发参数 -> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// 注：该接口必须使用 live key

// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn) -> 点击你创建的应用 -> 应用首页 -> 应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, 'your_rsa_private_key.pem'));

/* eslint no-unused-vars: off */

/**
 * 查询银行卡信息
 */
virtuePay.cardInfo.query(
  { app: APP_ID,
    bank_account: '6222280012469823' },
  function (err, data) {
    if (err != null){
      console.log('failed: ', err);
    }
    // YOUR CODE
  }
);
