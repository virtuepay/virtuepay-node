// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 创建余额赠送 balance_bonuses
 */
var order_no = new Date().getTime().toString().substr(0, 10);
var params_create = {
  'user': 'user_test_02', // 受赠的用户 ID, 必传
  'order_no': order_no, // 商户订单号，必须在商户系统内唯一, 必传
  'amount': 10, // 支付受赠余额，单位：分, 必传
  'description': 'Your Description' // 描述, 可选
};
virtuePay.balanceBonuses.create(APP_ID, params_create, function(err, data) {
  if (err != null){
    console.log('virtuePay.balanceBonuses.create fail:', err);
  }
  // YOUR CODE
});

/**
 * 查询单个余额赠送 balance_bonuses
 */
virtuePay.balanceBonuses.retrieve(APP_ID,
  "650170821521710018560001", // BalanceBonuses ID
  function(err, data) {
    if (err != null){
      console.log('virtuePay.balanceBonuses.retrieve fail:', err);
    }
    // YOUR CODE
});

/**
 * 查询余额赠送 balance_bonuses 列表
 */
var params_list = {
  'page': 1,
  'per_page': 3
};
virtuePay.balanceBonuses.list(APP_ID, params_list, function(err, data) {
  if (err != null){
    console.log('virtuePay.balanceBonuses.list fail:', err);
  }
  // YOUR CODE
});


