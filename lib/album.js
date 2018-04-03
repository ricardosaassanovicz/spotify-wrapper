'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id, {
    method: 'GET', HEADERS: _config.HEADERS
  }).then(_utils2.default);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums?ids=' + ids, {
    method: 'GET', HEADERS: _config.HEADERS
  }).then(_utils2.default);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config.API_URL + '/albums/' + id + '/track', {
    method: 'GET', HEADERS: _config.HEADERS
  }).then(_utils2.default);
};