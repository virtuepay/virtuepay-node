# 查询账户余额明细

### 查询账户余额明细
``` js
virtuePay.balanceTransactions.list(
  APP_ID,
  { page: 1 },
  function(err, datas) {
    // YOUR CODE
  }
);

virtuePay.balanceTransactions.retrieve(
  APP_ID,
  "1477034484747", // Transaction ID
  function(err, data) {
    // YOUR CODE
  }
);
```
