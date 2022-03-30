// VirtuePay Server SDK
// 说明：
// 以下代码只是为了方便商户测试而提供的样例代码，商户可根据自己网站需求按照技术文档编写, 并非一定要使用该代码。
// 接入退款流程参考开发者中心：https://www.virtuepay.cn/docs/server/refund ，文档可筛选后端语言和接入渠道。
// 该代码仅供学习和研究 VirtuePay SDK 使用，仅供参考。

// api_key 获取方式：登录 [Dashboard](https://dashboard.virtuepay.cn)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = "6913fa78c9fb484781e6617c5cb958b0"
// 设置 api_key
var virtuePay = require('../lib/virtuePay')(API_KEY);

virtuePay.setTimeout(60000)

// 通过发起一次退款请求创建一个新的 refund 对象，只能对已经发生交易并且没有全额退款的 charge 对象发起退款
virtuePay.charges.createRefund(
  "53405223260160",
  // amount 为退款的金额, 单位为对应币种的最小货币单位，例如：人民币为分（如退款金额为 1 元，此处请填 100）。必须小于等于可退款金额，默认为全额退款
  { amount: 1, description: "测试XPay退款" },
  function(err, refund) {
    if (err != null) {
      console.log("virtuePay.charges.createRefund fail:", err);
    }
    // YOUR CODE
    console.log(refund)
  }
);
