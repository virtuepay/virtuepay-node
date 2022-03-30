'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/coupon_templates',

  create: virtuePayMethod({
    method: 'POST',
    urlParams: ['appId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['appId', 'id']
  }),

  update: virtuePayMethod({
    method: 'PUT',
    path: '/{id}',
    urlParams: ['appId', 'id']
  }),

  delete: virtuePayMethod({
    method: 'DELETE',
    path: '/{id}',
    urlParams: ['appId', 'id']
  }),

  createCoupon: virtuePayMethod({
    method: 'POST',
    path: '/{couponTmplId}/coupons',
    urlParams: ['appId', 'couponTmplId']
  }),

  listCoupons: virtuePayMethod({
    method: 'GET',
    path: '/{couponTmplId}/coupons',
    urlParams: ['appId', 'couponTmplId']
  }),
});
