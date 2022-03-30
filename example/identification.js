// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com) -> 点击管理平台右上角公司名称 -> 企业面板 -> 开发参数 -> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// app_id 获取方式：登录 [Dashboard](https://dashboard.pingxx.com) -> 点击你创建的应用 -> 应用首页 -> 应用 ID(App ID)
var APP_ID = '5c3ea278d5f34a79bfe5819781905551';
// 设置 api_key
var pingpp = require('../lib/pingpp')(API_KEY);

// 设置请求签名私钥路径（该接口必须添加签名，请在 dashboard 填写公钥）
pingpp.setPrivateKeyPath(__dirname + '/your_rsa_private_key.pem');
// 或者设置请求签名私钥内容，请保留换行符 "\n"
// pingpp.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----\n\
// ......\n\
// ... 私钥内容 ...\n\
// ......\n\
// -----END RSA PRIVATE KEY-----');

// 发起认证请求
pingpp.identification.identify(
  {
    type: 'bank_card',
    app: APP_ID,
    data: {
      id_name: '张三',
      id_number: '320291198811110000',
      card_number: '6201111122223333'
    }
  },
  function(err, result) {
    if (err != null) {
      console.log("pingpp.identification.identify fail:", err);
    }
    // YOUR CODE
  }
);
