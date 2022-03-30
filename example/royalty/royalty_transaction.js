// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 查询分润结算明细列表
 */
virtuePay.royaltyTransactions.list(
  { page: 1, per_page: 3 },
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
    console.log(data);
  }
);

/**
 * 查询分润结算明细
 */
virtuePay.royaltyTransactions.retrieve(
  '441170612143400001', // royaltyTransactions ID
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
    console.log(data);
  }
);
