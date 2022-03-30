// VirtuePay Server SDK
// 说明：
// 以下代码只是为了方便商户测试而提供的样例代码，商户可根据自己网站需求按照技术文档编写, 并非一定要使用该代码。
// API接入文档：https://www.virtuepay.cn ，文档可筛选后端语言和接入渠道。
// 该代码仅供学习和研究 VirtuePay SDK 使用，仅供参考。

// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = "6913fa78c9fb484781e6617c5cb958b0"
// app_id 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击你创建的应用->应用首页->应用 ID(App ID)
var APP_ID = "5c3ea278d5f34a79bfe5819781905551"
// 设置 api_key
var virtuePay = require('../../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, '../your_rsa_private_key.pem'));

/**
 * 创建优惠券模板
 */
virtuePay.couponTemplates.create(
  APP_ID, // APP ID
  {
    "name": "25OFF", // 优惠券模板名称
    "type": 1, // 优惠券模板的类型 1：现金券；2：折扣券
    "amount_off":1, // 折扣金额
    "amount_available": 10000, // 订单金额大于等于该值时，优惠券有效（适用于满减）；0 表示无限制
    "max_circulation": 1000, // 优惠券最大生成数量，当已生成数量达到最大值时，不能再生成优惠券；默认 null，表示可以无限生成
    "metadata": {
    },
    "expiration": null
  }, function(err, data) {
    if (err!=null){
      console.log("virtuePay.couponTemplates.create fail:",err)
    }
    // YOUR CODE
  }
);

/**
 * 查询优惠券模板
 */
virtuePay.couponTemplates.retrieve(
  APP_ID, // APP ID
  "300117083118440300048601", // 优惠券模板 ID
  function(err, data) {
    if (err!=null){
      console.log("virtuePay.couponTemplates.retrieve fail:",err)
    }
    // YOUR CODE
  }
);

/**
 * 查询优惠券模板列表
 */
virtuePay.couponTemplates.list(
  APP_ID, // APP ID
  {page: 1},
  function(err, datas) {
    if (err!=null){
      console.log("virtuePay.couponTemplates.list fail:",err)
    }
    // YOUR CODE
  }
);

/**
 * 优惠券模板更新
 */
virtuePay.couponTemplates.update(
  APP_ID, // APP ID
  "300117083118440300048601",// 优惠券模板 ID
  {
    "metadata": {
        "key": "new value"
      }
  },
  function(err, data) {
    if (err!=null){
      console.log("virtuePay.couponTemplates.update fail:",err)
    }
    // YOUR CODE
  }
);

/**
 * 优惠券模板删除
 */
virtuePay.couponTemplates.delete(
  APP_ID, // APP ID
  "300117083118440300048601",// 优惠券模板 ID
  function(err, data) {
    if (err!=null){
      console.log("virtuePay.couponTemplates.delete fail:",err)
    }
    // YOUR CODE
  }
);
