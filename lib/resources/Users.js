'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/users',

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
    path: '/{userId}',
    urlParams: ['appId', 'userId']
  }),

  update: virtuePayMethod({
    method: 'PUT',
    path: '/{userId}',
    urlParams: ['appId', 'userId']
  }),

});
