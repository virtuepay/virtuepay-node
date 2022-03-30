'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({
  path: 'apps/{appId}/balance_transactions',

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{txnId}',
    urlParams: ['appId', 'txnId']
  }),
});
