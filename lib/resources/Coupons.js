'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/users',

  create: virtuePayMethod({
    method: 'POST',
    path: '/{userId}/coupons',
    urlParams: ['appId', 'userId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    path: '/{userId}/coupons',
    urlParams: ['appId', 'userId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{userId}/coupons/{couponsId}',
    urlParams: ['appId', 'userId', 'couponsId']
  }),

  update: virtuePayMethod({
    method: 'PUT',
    path: '/{userId}/coupons/{couponsId}',
    urlParams: ['appId', 'userId', 'couponsId']
  }),

  delete: virtuePayMethod({
    method: 'DELETE',
    path: '/{userId}/coupons/{couponsId}',
    urlParams: ['appId', 'userId', 'couponsId']
  }),
});
