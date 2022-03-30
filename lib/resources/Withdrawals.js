'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/withdrawals',

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
  }),

  update: virtuePayMethod({
    method: 'PUT',
    path: '/{id}',
    urlParams: ['appId', 'id']
  }),

  cancel: function(appId, id, callback) {
    return this.wrapTimeout(this.update(appId, id, {
      'status': 'canceled'
    }), callback);
  },

  confirm: function(appId, id, callback) {
    return this.wrapTimeout(this.update(appId, id, {
      'status': 'pending'
    }), callback);
  },

});
