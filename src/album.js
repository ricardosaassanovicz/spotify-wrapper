import { API_URL } from '../src/config';
import { toJSON } from '../src/utils';

export const getAlbum = (id) => 
  fetch(`${API_URL}/albums/${id}`).then(toJSON);

export const getAlbums = (ids) => 
  fetch(`${API_URL}/albums?ids=${ids}`).then(toJSON);

export const getAlbumTracks = (id) => 
  fetch(`${API_URL}/albums/${id}/track`).then(toJSON);
