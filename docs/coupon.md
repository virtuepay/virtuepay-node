# 账户优惠券

### 发送优惠券
``` js
virtuePay.coupons.create(
  "APP_ID", // App ID
  "USER_ID", // 用户 ID,
  {
    "coupon_template":"xxx",
    "metadata": {
    },
  }, function(err, data) {
    // YOUR CODE
  }
);
```

### 查看优惠券
``` js
virtuePay.coupons.retrieve(
  "APP_ID", // App ID
  "USER_ID", // 用户 ID
  "COUPON_ID",
  function(err, data) {
    // YOUR CODE
  }
);
```

### 查询账户优惠券列表
``` js
virtuePay.coupons.list(
  "APP_ID", // App ID
  "USER_ID", // 用户 ID
  {page: 1},
  function(err, datas) {
    // YOUR CODE
  }
);
```

### 更新账户优惠券
``` js
virtuePay.coupons.update(
  APP_ID, // App ID
  "123", // 用户 ID
  "1477034484747",// 优惠券 ID
  {
    "metadata": {
        "key": "value"
    }
  },
  function(err, data) {
    // YOUR CODE
  }
);
```

### 删除账户优惠券
``` js
virtuePay.coupons.delete(
  APP_ID, // App ID
  "123", // 用户 ID
  "1477034484747",// 优惠券 ID
  function(err, data) {
    // YOUR CODE
  }
);
```