var VirtuePayResource = require('../VirtuePayResource');

module.exports = VirtuePayResource.extend({

  path: 'customs',

  includeBasic: [
    'create','retrieve'
  ],

});
