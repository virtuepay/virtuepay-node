// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 创建 sub_app
 */
virtuePay.subApps.create(APP_ID,{
  'display_name': 'Display Name',
  'user': 'test_user_for_sub_app',
  'metadata': {
    'key-1': 'value-1'
  },
  'description': 'Your description.'
}, function(err, data) {
  // YOUR CODE
  if (err != null){
    console.log(err);
  }
});

/**
 * 查询 sub_app
 */
virtuePay.subApps.retrieve(
  APP_ID,
  'SUB_APP_ID', //  sub_app ID
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);

/**
 * 查询 sub_app 列表
 */
virtuePay.subApps.list(
  APP_ID,
  { page: 1, per_page: 3 },
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);

/**
 * 更新 sub_app
 */
virtuePay.subApps.update(
  APP_ID,
  'SUB_APP_ID', // sub_app ID
  {
    'description': 'New description',
  }, function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);

/**
 * 删除 sub_app
 */
virtuePay.subApps.delete(
  APP_ID,
  'SUB_APP_ID', // sub_app ID
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);
