'use strict';

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error klass to wrap any errors returned by virtuePay-node
 */
function _Error(_raw) {
  this.populate.apply(this, arguments);
  this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from VirtuePay's REST API)
 */
var VirtuePayError = _Error.VirtuePayError = _Error.extend({
  type: 'VirtuePayError',
  populate: function(raw) {
    // Move from prototype def (so it appears in stringified obj)
    this.type = this.type;

    this.stack = (new Error(raw.message)).stack;
    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.message = raw.message;
    this.detail = raw.detail;
    this.raw = raw;
  }
});

/**
 * Helper factory which takes raw virtuePay errors and outputs wrapping instances
 */
VirtuePayError.generate = function(rawVirtuePayError) {
  switch (rawVirtuePayError.type) {
  case 'invalid_request_error':
    return new _Error.VirtuePayInvalidRequestError(rawVirtuePayError);
  case 'api_error':
    return new _Error.VirtuePayAPIError(rawVirtuePayError);
  case 'channel_error':
    return new _Error.VirtuePayChannelError(rawVirtuePayError);
  }

  return new _Error('Generic', 'Unknown Error');
};

// Specific VirtuePay Error types:
_Error.VirtuePayInvalidRequestError = VirtuePayError.extend({ type: 'VirtuePayInvalidRequestError' });
_Error.VirtuePayAPIError = VirtuePayError.extend({ type: 'VirtuePayAPIError' });
_Error.VirtuePayAuthenticationError = VirtuePayError.extend({ type: 'VirtuePayAuthenticationError' });
_Error.VirtuePayConnectionError = VirtuePayError.extend({ type: 'VirtuePayConnectionError' });
_Error.VirtuePayChannelError = VirtuePayError.extend({ type: 'VirtuePayChannelError'});
_Error.VirtuePayRateLimitError = VirtuePayError.extend({ type: 'VirtuePayRateLimitError'});
