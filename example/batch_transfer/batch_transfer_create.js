// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

var channel = 'alipay';
var batch_transfer_recipient = require('./batch_transfer_recipient');

var params = {
  'app': APP_ID ,
  'batch_no': new Date().getTime().toString(), // 批量企业付款批次号，3-24位，允许字母和英文。
  'channel': channel, // 渠道，目前支持 alipay、 unionpay、wx_pub、allinpay、jdpay
  'amount': 5000, // 订单总金额, 人民币单位：分（如订单总金额为 1 元，此处请填 100）
  'description': 'Your Description',
  'recipients': [
  ],
  'type': 'b2c' // 付款类型，转账到个人用户为 b2c，转账到企业用户为 b2b（微信公众号 wx_pub 的企业付款，仅支持 b2c）。
};

params.recipients.push(batch_transfer_recipient(channel));

/**
 * 批量付款
 */
virtuePay.batchTransfers.create(params, function(err, batchTransfer) {
  if (err != null) {
    console.log('virtuePay.batchTransfers.create failed: ', err);
  } else {
    console.log(batchTransfer);
  }
  // YOUR CODE
});
