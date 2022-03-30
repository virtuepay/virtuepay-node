'use strict';

// SDK 支持 Promise，以 charge 为例，可以按以下方法调用

const API_KEY = '6913fa78c9fb484781e6617c5cb958b0';
const APP_ID = '5c3ea278d5f34a79bfe5819781905551';

var virtuePay = require('../lib/virtuePay')(API_KEY);
var path = require('path');

virtuePay.setPrivateKeyPath(path.join(__dirname, 'your_rsa_private_key.pem'));

virtuePay.charges.retrieve(
  'ch_40iPeHTuHqj1eHeH44qn5yTG'
).then(ch => {
  console.log(ch);
}).catch(e => {
  console.log(e);
});

virtuePay.charges.list(
  {'limit': 3, 'app': {'id': APP_ID}}
).then(chs => {
  console.log(chs);
}).catch(e => {
  console.log(e);
});
