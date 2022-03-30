'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'identification',

  identify: virtuePayMethod({
    method: 'POST',
  })

});
