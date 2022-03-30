'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: '/apps/{appId}/recharges',

  create: virtuePayMethod({
    method: 'POST',
    urlParams: ['appId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{rechargeId}',
    urlParams: ['appId', 'rechargeId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  }),

  createRefund: virtuePayMethod({
    method: 'POST',
    path: '/{rechargeId}/refunds',
    urlParams: ['appId', 'rechargeId']
  }),

  retrieveRefund: virtuePayMethod({
    method: 'GET',
    path: '/{rechargeId}/refunds/{refundId}',
    urlParams: ['appId', 'rechargeId', 'refundId']
  }),

  listRefunds: virtuePayMethod({
    method: 'GET',
    path: '/{rechargeId}/refunds',
    urlParams: ['appId', 'rechargeId']
  })

});
