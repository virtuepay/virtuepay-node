'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/users/{userId}/settle_accounts',

  create: virtuePayMethod({
    method: 'POST',
    urlParams: ['appId', 'userId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId', 'userId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{settleAccountId}',
    urlParams: ['appId', 'userId', 'settleAccountId']
  }),

  delete: virtuePayMethod({
    method: 'DELETE',
    path: '/{settleAccountId}',
    urlParams: ['appId', 'userId', 'settleAccountId']
  }),

});
