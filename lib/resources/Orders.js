'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'orders',

  includeBasic: [
    'create','list','retrieve'
  ],

  update: virtuePayMethod({
    method: 'PUT',
    path: '{id}',
    urlParams: ['id']
  }),

  cancel: function(id, callback) {
    return this.wrapTimeout(this.update(id, {
      'status': 'canceled'
    }), callback);
  },

  pay: virtuePayMethod({
    method: 'POST',
    path: '/{orderId}/pay',
    urlParams: ['orderId']
  }),

  createRefund: virtuePayMethod({
    method: 'POST',
    path: '/{orderId}/order_refunds',
    urlParams: ['orderId']
  }),


  listRefunds: virtuePayMethod({
    method: 'GET',
    path: '/{orderId}/order_refunds',
    urlParams: ['orderId']
  }),

  retrieveRefund: virtuePayMethod({
    method: 'GET',
    path: '/{orderId}/order_refunds/{refundId}',
    urlParams: ['orderId','refundId']
  }),

  retrieveCharge: virtuePayMethod({
    method: 'GET',
    path: '/{orderId}/charges/{chargeId}',
    urlParams: ['orderId','chargeId']
  }),

  listCharges: virtuePayMethod({
    method: 'GET',
    path: '/{orderId}/charges',
    urlParams: ['orderId']
  })

});
