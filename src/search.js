/* global fetch */

import { API_URL } from './config';
import { toJSON } from './utils';

const token = 'BQBwnYuoOnxMblT6NpdeSFIaTSltqWsKqSH4HIkQGugPkU1k7d828xRGbBtXJJ3CiMzjfiA8H739LNHhIpL0z_526e8eovRSsjliv0Pt_dfW9riemGbjs-62WskxP_XAgCXyRLMNjwmf14dP0ckDGnvc_g';

export const search = (query, type) => 
  fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization : 'Bearer ' + token
    }
  }).then(toJSON);

export const searchAlbums = (query) => 
  search(query, 'album');

export const searchArtists = (query) => 
  search(query, 'artist');

export const searchTracks = (query) => 
  search(query, 'track');

export const searchPlaylists = (query) => 
  search(query, 'playlist');

 