'use strict';

var VirtuePayResource = require('../VirtuePayResource');

module.exports = VirtuePayResource.extend({

  path: 'events',
  includeBasic: [
    'retrieve'
  ],

});
