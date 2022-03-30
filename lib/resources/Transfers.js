'use strict';

var VirtuePayResource = require('../VirtuePayResource');

module.exports = VirtuePayResource.extend({

  path: 'transfers',

  includeBasic: [
    'create', 'list', 'retrieve'
  ],
});
