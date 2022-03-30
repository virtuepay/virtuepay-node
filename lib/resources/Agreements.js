'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'agreements',

  includeBasic: [
    'create', 'list', 'retrieve'
  ],

  update: virtuePayMethod({
    method: 'PUT',
    path: '/{id}',
    urlParams: ['id']
  }),

  cancel: function(id, callback) {
    return this.wrapTimeout(this.update(id, {
      'status': 'canceled'
    }), callback);
  },
});
