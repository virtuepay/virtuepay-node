'use strict';

var VirtuePayResource = require('../VirtuePayResource');

module.exports = VirtuePayResource.extend({

  path: 'red_envelopes',

  includeBasic: [
    'create', 'list', 'retrieve'
  ],

});
