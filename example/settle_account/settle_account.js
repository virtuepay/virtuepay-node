// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 创建 settle_account
 */
virtuePay.settleAccounts.create(
  APP_ID,
  'test_user_001', // User ID
  {
    'channel': 'alipay',              // [wx_pub, wx, alipay, bank_account] 其中一种
    'recipient': {                    // recipient 参数请参考各个渠道,以下是 alipay 参数
      'account': 'account01@gmail.com', // 接收者支付宝账号
      'name': '李四',                  // 接收者姓名
      'type': 'b2c',                   // 转账类型
      'account_type': 'ALIPAY_LOGONID'
    }
  }, function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);

/**
 * 查询 settle_account
 */
virtuePay.settleAccounts.retrieve(
  APP_ID,
  '1477034484747', // User ID
  '320117061416423600014001', //  settle_account ID
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);

/**
 * 查询 settle_account 列表
 */
virtuePay.settleAccounts.list(
  APP_ID,
  '1477034484747', // User ID
  { page: 1, per_page: 3 },
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);

/**
 * 删除 settle_account
 */
virtuePay.settleAccounts.delete(
  APP_ID,
  '1477034484747', // User ID
  'SETTLE_ACCOUNT_ID', // settle_account ID
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);
