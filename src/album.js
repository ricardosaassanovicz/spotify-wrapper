/* global fetch */

import toJSON from './utils';
import { API_URL, HEADERS } from './config';

export const getAlbum = id => fetch(`${API_URL}/albums/${id}`, {
  method: 'GET', HEADERS,
}).then(toJSON);

export const getAlbums = ids => fetch(`${API_URL}/albums?ids=${ids}`, {
  method: 'GET', HEADERS,
}).then(toJSON);

export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/track`, {
  method: 'GET', HEADERS,
}).then(toJSON);
