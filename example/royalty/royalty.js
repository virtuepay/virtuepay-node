// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 查询分润对象列表
 */
virtuePay.royalties.list(
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
 * 查询分润对象
 */
virtuePay.royalties.retrieve(
  '411170614151400001', // royalties ID
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);

/**
 * 批量更新分润对象
 */
virtuePay.royalties.batchUpdate(
  {
    'ids': ['411170614151400001'],    // 分润 ID 列表, 必传
    'method': null,                   // 手动标记结算: manual 或 取消手动标记结算：null, 可选
    'description': 'Your description'
  },
  function(err, data) {
    // YOUR CODE
    if (err != null){
      console.log(err);
    }
  }
);
