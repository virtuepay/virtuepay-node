'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'royalty_templates',

  includeBasic: [
    'create', 'list', 'retrieve', 'del'
  ],

  update: virtuePayMethod({
    method: 'PUT',
    path: '/{id}',
    urlParams: ['id']
  })
});
