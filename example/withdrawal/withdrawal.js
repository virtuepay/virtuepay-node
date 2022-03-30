// VirtuePay Server SDK
// 说明：
// 以下代码只是为了方便商户测试而提供的样例代码，商户可根据自己网站需求按照技术文档编写, 并非一定要使用该代码。
// 接入账户系统参考开发者中心：https://www.pingxx.com/docs/server/transfer ，文档可筛选后端语言和接入渠道。
// 该代码仅供学习和研究 VirtuePay SDK 使用，仅供参考。

// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

// 请求参数的 extra 对应各渠道的取值规则请查看 withdrawal_extra 相应方法内说明
var withdrawal_extra = require('./withdrawal_extra');

/**
 * 用户发起余额提现
 */
var order_no = new Date().getTime().toString().substr(0, 10);
var channel = 'unionpay';
var extra = withdrawal_extra(channel);
var params = {
  'user': 'test_user_001',
  'amount': 20, // 金额
  'channel': channel, // 渠道
  'user_fee': 10, // 用户需要承担的手续费
  'order_no': order_no, // 提现订单号，为长度不大于 16 的数字
  'description': 'test232description', // 转账描述
  'extra': extra
};
virtuePay.withdrawals.create(APP_ID, params, function(err, data) {
    if (err != null){
      console.log('virtuePay.withdrawals.create fail:', err);
    }
    // YOUR CODE
  }
);

/**
 * 查询账户提现列表
 */
virtuePay.withdrawals.list(
  APP_ID, // App ID
  { per_page: 3 },
  function(err, data) {
    if (err != null){
      console.log('virtuePay.withdrawals.retrieve fail:', err);
    }
    // YOUR CODE
  }
);

/**
 * 查询账户提现
 */
virtuePay.withdrawals.retrieve(
  APP_ID, // App ID
  '1701709011052380697', // 提现 ID
  function(err, data) {
    if (err != null){
      console.log('virtuePay.withdrawals.retrieve fail:', err);
    }
    // YOUR CODE
  }
);

/**
 * 账户提现撤销
 */
virtuePay.withdrawals.cancel(
  APP_ID, // App ID
  '1701709011053327225', // 提现 ID
  function(err, data) {
    if (err != null){
      console.log('virtuePay.withdrawals.cancel fail:', err);
    }
    // YOUR CODE
  }
);


/**
 * 账户提现确认
 */
virtuePay.withdrawals.confirm(
  APP_ID, // App ID
  '1701709011052380697', // 提现 ID
  function(err, data) {
    if (err != null){
      console.log('virtuePay.withdrawals.confirm fail:', err);
    }
    // YOUR CODE
  }
);
