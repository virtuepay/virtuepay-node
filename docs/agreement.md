# 签约

### 创建
``` js
virtuePay.agreements.create({
  contract_no: '123456789',
  app: 'APP_ID',
  channel: channel,
  extra: extra,
  metadata: {}
}, function(err, agreement) {
  // YOUR CODE
});
```

### 查询
``` js
virtuePay.agreements.retrieve(
  'AGREEMENT_ID',
  function(err, agreement) {
    // YOUR CODE
  }
);
```
``` js
virtuePay.agreements.list(
  { app: 'APP_ID', per_page: 3 },
  function(err, agreements) {
    // YOUR CODE
  }
);
```

### 解约
``` js
virtuePay.agreements.cancel(
  'AGREEMENT_ID',
  function(err, agreement) {
    // YOUR CODE
  }
);
```
