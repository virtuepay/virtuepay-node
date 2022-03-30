'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'royalties',

  includeBasic: [
    'list', 'retrieve'
  ],

  batchUpdate: virtuePayMethod({
    method: 'PUT'
  }),

});
