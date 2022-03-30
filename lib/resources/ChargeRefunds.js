'use strict';

var VirtuePayResource = require('../VirtuePayResource');

module.exports = VirtuePayResource.extend({

  path: 'charges/{chargeId}/refunds',

  includeBasic: [
    'create', 'list', 'retrieve',
  ],

});
