'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/balance_transfers',

  create: virtuePayMethod({
    method: 'POST',
    urlParams: ['appId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{balanceTransferId}',
    urlParams: ['appId', 'balanceTransferId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  })
});
