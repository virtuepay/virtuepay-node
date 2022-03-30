'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/balance_bonuses',

  create: virtuePayMethod({
    method: 'POST',
    urlParams: ['appId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['appId', 'id']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  })

});
