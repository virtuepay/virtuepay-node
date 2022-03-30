// api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
var API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
// 设置 api_key
var virtuePay = require('../lib/virtuePay')(API_KEY);

// retrieve an event
virtuePay.events.retrieve(
  'evt_VzWdLFbm5D6OdOuzQv7oqF0X',
  function(err, event) {
    if (err != null) {
      console.log('virtuePay.events.retrieve fail:', err);
    }
    // YOUR CODE
  }
);
