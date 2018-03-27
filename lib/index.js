'use strict';

var _search = require('../src/search');

var _album = require('../src/album');

module.exports = {
  search: _search.search,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchPlaylists: _search.searchPlaylists,
  searchTracks: _search.searchTracks,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};