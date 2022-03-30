'use strict';

var VirtuePayResource = require('../VirtuePayResource');
var virtuePayMethod = VirtuePayResource.method;

module.exports = VirtuePayResource.extend({

  path: 'apps/{appId}/sub_apps',

  create: virtuePayMethod({
    method: 'POST',
    urlParams: ['appId']
  }),

  list: virtuePayMethod({
    method: 'GET',
    urlParams: ['appId']
  }),

  retrieve: virtuePayMethod({
    method: 'GET',
    path: '/{subAppId}',
    urlParams: ['appId', 'subAppId']
  }),

  update: virtuePayMethod({
    method: 'PUT',
    path: '/{subAppId}',
    urlParams: ['appId', 'subAppId']
  }),

  delete: virtuePayMethod({
    method: 'DELETE',
    path: '/{subAppId}',
    urlParams: ['appId', 'subAppId']
  }),

  createChannel: virtuePayMethod({
    method: 'POST',
    path: '/{subAppId}/channels',
    urlParams: ['appId', 'subAppId']
  }),

  updateChannel: virtuePayMethod({
    method: 'PUT',
    path: '/{subAppId}/channels/{channelName}',
    urlParams: ['appId', 'subAppId', 'channelName']
  }),

  retrieveChannel: virtuePayMethod({
    method: 'GET',
    path: '/{subAppId}/channels/{channelName}',
    urlParams: ['appId', 'subAppId', 'channelName']
  }),

  deleteChannel: virtuePayMethod({
    method: 'DELETE',
    path: '/{subAppId}/channels/{channelName}',
    urlParams: ['appId', 'subAppId', 'channelName']
  }),

});
