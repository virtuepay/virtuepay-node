// Ping++ Server SDK
// 说明：
// 以下代码只是为了方便商户测试而提供的样例代码，商户可根据自己网站需求按照技术文档编写, 并非一定要使用该代码。
// API接入文档：https://www.pingxx.com ，文档可筛选后端语言和接入渠道。
// 该代码仅供学习和研究 Ping++ SDK 使用，仅供参考。

// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = "6913fa78c9fb484781e6617c5cb958b0";
// app_id 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = "5c3ea278d5f34a79bfe5819781905551";
// 设置 api_key
var pingpp = require('../../lib/pingpp')(API_KEY);
var path = require('path');

pingpp.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 创建订单退款
 */
pingpp.orders.createRefund(
  "2001708280000128761", // ORDER ID
  {
    "description":"test-refund"
  },
  function(err, order) {
    if (err!=null){
      console.log("pingpp.orders.creatRefund fail:",err)
    }
    // YOUR CODE
  }
);

/**
 * 查询单个订单退款对象
 */
pingpp.orders.retrieveRefund(
  "2001708220000258501", // ORDER ID
  "re_5GefjD14GW50qrT40Gq9KmPS", // REFUND ID
  function(err, order) {
    if (err!=null){
      console.log("pingpp.orders.retrieveRefund fail:",err)
    }
    // YOUR CODE
  }
);

/**
 * 查询订单退款列表
 */
pingpp.orders.listRefunds(
  "2001708220000258501", // ORDER ID
  {'page': 1, 'per_page': 3},
  function(err, data) {
    if (err!=null){
      console.log("pingpp.orders.listRefunds fail:",err)
    }
    // YOUR CODE
  }
);
