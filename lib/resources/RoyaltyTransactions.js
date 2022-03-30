'use strict';

var VirtuePayResource = require('../VirtuePayResource');

module.exports = VirtuePayResource.extend({

  path: 'royalty_transactions',

  includeBasic: [
    'list', 'retrieve'
  ],

});
