// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 创建分润模板对象
 */
virtuePay.royaltyTemplates.create(
  {
    'app': APP_ID,                    // App ID, 必传
    'name': 'royalty_templates name', // 模板名称，允许中英文等常用字符, 可选
    'rule': {
      'royalty_mode': 'rate',         // 分润模式。分为按订单金额（包含优惠券金额）的比例 rate 和固定金额 fixed, 必传
      'refund_mode': 'no_refund',     // 退分润模式。分为退款时不退分润 no_refund、按比例退分润 proportional 和一旦退款分润全退 full_refund, 必传
      'allocation_mode': 'receipt_reserved',  // 分配模式。指当订单确定的层级如果少于模板配置层级时，模板中多余的分润金额是归属于收款方 receipt_reserved 还是服务方 service_reserved。必传
      'data': [                       // 分润数据列表, 必传
        {
          'level': 0,                 // 子商户层级值，0 表示平台， 1 表示一级子商户，取值范围 >=0
          'value': 11                 // 分润数值。rate 下取值为 0 - 10000，单位为 0.01 %，fixed 下取值为 0 - 1000000，单位为分
        },
        {
          'level': 1,
          'value': 12
        }
      ]
    }
  },
  function(err, royaltyTemplate) {
    if (err != null){
      console.log(err);
    }
    // YOUR CODE
  }
);

/**
 * 查询分润模板对象列表
 */
virtuePay.royaltyTemplates.list(
  {
    page: 1,
    per_page: 3
  },
  function(err, data) {
    if (err != null){
      console.log(err);
    }
    // YOUR CODE
  }
);

/**
 * 查询单个分润模板对象
 */
virtuePay.royaltyTemplates.retrieve(
  '450170830143400001',  //  RoyaltyTemplates ID
  function(err, royaltyTemplate) {
    if (err != null){
      console.log(err);
    }
    // YOUR CODE
  }
);

/**
 * 更新分润模板对象
 */
virtuePay.royaltyTemplates.update(
  '450170830143400001', // RoyaltyTemplates ID
  {
    'name': 'royalty_templates name new',
    'rule': {
      'royalty_mode': 'rate',         // 分润模式。分为按订单金额（包含优惠券金额）的比例 rate 和固定金额 fixed, 必传
      'refund_mode': 'no_refund',     // 退分润模式。分为退款时不退分润 no_refund、按比例退分润 proportional 和一旦退款分润全退 full_refund, 必传
      'allocation_mode': 'receipt_reserved',  // 分配模式。指当订单确定的层级如果少于模板配置层级时，模板中多余的分润金额是归属于收款方 receipt_reserved 还是服务方 service_reserved。必传
      'data': [                       // 分润数据列表, 必传
        {
          'level': 0,                 // 子商户层级值，0 表示平台， 1 表示一级子商户，取值范围 >=0
          'value': 11                 // 分润数值。rate 下取值为 0 - 10000，单位为 0.01 %，fixed 下取值为 0 - 1000000，单位为分
        },
        {
          'level': 1,
          'value': 12
        }
      ]
    }
  },
  function(err, data) {
    if (err != null){
      console.log(err);
    }
    // YOUR CODE
  }
);

/**
 * 删除分润模板对象
 */
virtuePay.royaltyTemplates.del(
  '450170830143400001', // RoyaltyTemplates ID
  function(err, data) {
    if (err != null){
      console.log(err);
    }
    // YOUR CODE
  }
);
