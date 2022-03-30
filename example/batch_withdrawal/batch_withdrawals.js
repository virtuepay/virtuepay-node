// VirtuePay Server SDK
// 说明：
// 以下代码只是为了方便商户测试而提供的样例代码，商户可根据自己网站需求按照技术文档编写, 并非一定要使用该代码。
// 接入账户系统参考开发者中心：https://www.virtuepay.cn/docs/server/transfer ，文档可筛选后端语言和接入渠道。
// 该代码仅供学习和研究 VirtuePay SDK 使用，仅供参考。

// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 创建批量提现
 */
virtuePay.batchWithdrawals.create(
  APP_ID, // App ID
  {
    'withdrawals': [
      '1701708221834035593', // 待确认提现对象 ID
      '1701611151015078981'  // 待确认提现对象 ID
    ]
  },
  function(err, data) {
    if (err != null){
      console.log('virtuePay.batchWithdrawals.create fail:', err);
    }
    // YOUR CODE
  }
);

/**
 * 查询单个批量提现
 */
virtuePay.batchWithdrawals.retrieve(
  APP_ID, // App ID
  '1901708221706050363', // 批量提现 ID
  function(err, data) {
    if (err != null){
      console.log('virtuePay.batchWithdrawals.retrieve fail:', err);
    }
    // YOUR CODE
  }
);

/**
 * 查询批量提现列表
 */
virtuePay.batchWithdrawals.list(
  APP_ID,
  {'per_page': 3},
  function (err, data) {
    if (err != null){
      console.log('virtuePay.batchWithdrawals.list fail:', err);
    }
    // YOUR CODE
  }
);
