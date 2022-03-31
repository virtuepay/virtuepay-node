'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var Error = require('../Error');
var virtuePayMethod = VirtuePayResource.method;
var hasOwn = {}.hasOwnProperty;

module.exports = VirtuePayResource.extend({

  path: 'payments',

  includeBasic: [
    'create', 'retrieve'
  ],

  list: function(params, callback) {
    if ((!hasOwn.call(params, 'app')
        || typeof params.app != 'object'
        || !hasOwn.call(params.app, 'id'))
      && !hasOwn.call(params, 'app[id]')
    ) {
      return this.wrapTimeout(new Promise(function (resolve, reject) {
        reject(new Error.VirtuePayInvalidRequestError({
          message: 'Please pass app[id] as parameter.'
        }));
      }), callback);
    } else {
      return this.wrapTimeout(virtuePayMethod({
        method: 'GET'
      }).call(this, params), callback);
    }
  },

  reverse: virtuePayMethod({
    method: 'POST',
    path: '/{chargeId}/reverse',
    urlParams: ['chargeId'],
  }),

  /**
   * Charge: Refund methods
   */
  createRefund: virtuePayMethod({
    method: 'POST',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId'],
  }),

  listRefunds: virtuePayMethod({
    method: 'GET',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId']
  }),

  retrieveRefund: virtuePayMethod({
    method: 'GET',
    path: '/{chargeId}/refunds/{refundId}',
    urlParams: ['chargeId', 'refundId']
  }),

});
