'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils');

/* global fetch */

var token = 'BQBwnYuoOnxMblT6NpdeSFIaTSltqWsKqSH4HIkQGugPkU1k7d828xRGbBtXJJ3CiMzjfiA8H739LNHhIpL0z_526e8eovRSsjliv0Pt_dfW9riemGbjs-62WskxP_XAgCXyRLMNjwmf14dP0ckDGnvc_g';

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  }).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums?ids=' + ids, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  }).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config.API_URL + '/albums/' + id + '/track', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  }).then(_utils.toJSON);
};