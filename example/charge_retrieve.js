// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// 设置 api_key
var virtuePay = require('../lib/virtuePay')(API_KEY);
// virtuePay.parseHeaders(/*headers*/); // 把从客户端传上来的 Headers 传到这里

// 设置请求签名密钥，密钥对需要你自己用 openssl 工具生成，如何生成可以参考帮助中心：https://help.pingxx.com/article/123161；
// 生成密钥后，需要在代码中设置请求签名的私钥(rsa_private_key.pem)；
// 然后登录 [Dashboard](https://dashboard.pingxx.com)->点击右上角公司名称->开发信息->商户公钥（用于商户身份验证）
// 将你的公钥复制粘贴进去并且保存->先启用 Test 模式进行测试->测试通过后启用 Live 模式

// 设置请求签名私钥路径
virtuePay.setPrivateKeyPath(__dirname + '/your_rsa_private_key.pem');
// 或者设置请求签名私钥内容，请保留换行符 "\n"
// virtuePay.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----\n\
// ......\n\
// ... 私钥内容 ...\n\
// ......\n\
// -----END RSA PRIVATE KEY-----');

virtuePay.charges.retrieve(
  '53399021719552',
  function(err, charge) {
    if (err != null){
      console.log('virtuePay.charges.retrieve failed: ', err);
    } else {
      console.log(charge);
    }
    // YOUR CODE
  }
);
