/* global fetch */

import { API_URL } from './config';
import { toJSON } from './utils';

const token = 'BQBwnYuoOnxMblT6NpdeSFIaTSltqWsKqSH4HIkQGugPkU1k7d828xRGbBtXJJ3CiMzjfiA8H739LNHhIpL0z_526e8eovRSsjliv0Pt_dfW9riemGbjs-62WskxP_XAgCXyRLMNjwmf14dP0ckDGnvc_g';

export const getAlbum = (id) => 
  fetch(`${API_URL}/albums/${id}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization : 'Bearer ' + token
    }
  }).then(toJSON);

export const getAlbums = (ids) => 
  fetch(`${API_URL}/albums?ids=${ids}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization : 'Bearer ' + token
    }
  }).then(toJSON);

export const getAlbumTracks = (id) => 
  fetch(`${API_URL}/albums/${id}/track`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization : 'Bearer ' + token
    }
  }).then(toJSON);
