'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('../src/config');

var _utils = require('../src/utils');

var token = 'BQD8JyQaNnhT5xA2LJRUtyENxTqtfzRiSoCTdAgDYNB_M6PPXCyE1A_XfTjyK1lAQvtz1frZVbBSkegsmqC82QR6jugsvWiGvSYRWPoZRpcCYd4eGFm99st7KYI-mHEhMhv9DWWtp7-PLUFZe-Pb1Pe4fw';

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  }).then(_utils.toJSON);
};

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};