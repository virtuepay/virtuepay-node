'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/balance_settlements',

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{balanceSettlementId}',
    urlParams: ['appId', 'balanceSettlementId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  })
});
