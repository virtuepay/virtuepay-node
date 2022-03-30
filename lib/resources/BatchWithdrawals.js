'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/batch_withdrawals',

  create: virtuePayMethod({
    method: 'POST',
    path: '',
    urlParams: ['appId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{batchWithdrawalId}',
    urlParams: ['appId','batchWithdrawalId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  })

});
