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
 * 创建账户
 */
virtuePay.users.create(APP_ID,{
  'id': 'user_' + new Date().getTime().toString(),
  'address': null,  // 用户地址
  'avatar': null,   // 头像
  'email': null,    // 邮箱地址
  'gender': 'MALE', // 性别
  'metadata': {},   // metadata
  'mobile': null,   // 手机号码
  'name': '123',    // 用户昵称
}, function(err, user) {
  // YOUR CODE
  if (err != null){
    console.log('virtuePay.users.create fail:', err);
  }
});

/**
 * 查询账户
 */
virtuePay.users.retrieve(
  APP_ID,
  '1477034484747', // 账户 ID
  function(err, user) {
    if (err != null){
      console.log('virtuePay.users.retrieve fail:', err);
    }
    // YOUR CODE
  }
);

/**
 * 查询账户列表
 */
virtuePay.users.list(
  APP_ID,
  {page: 1},
  function(err, users) {
    if (err != null){
      console.log('virtuePay.users.list fail:', err);
    }
    // YOUR CODE
  }
);

/**
 * 更新账户
 */
virtuePay.users.update(
  APP_ID,
  '1477034484747', // 账户 ID
  {
    'address': null,  // 用户地址
    'avatar': null,   // 头像
    'email': null,    // 邮箱地址
    'gender': 'MALE', // 性别
    'metadata': {},   // metadata
    'mobile': null,   // 手机号码
    'name': '123',    // 用户昵称
    //'disabled':false  // 是否禁用。使用该参数时，不能同时使用其他参数。
  }, function(err, user) {
    if (err != null){
      console.log('virtuePay.users.update fail:', err);
    }
    // YOUR CODE
  }
);
