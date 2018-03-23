const URL = (query, type) => `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
const token = 'BQD8JyQaNnhT5xA2LJRUtyENxTqtfzRiSoCTdAgDYNB_M6PPXCyE1A_XfTjyK1lAQvtz1frZVbBSkegsmqC82QR6jugsvWiGvSYRWPoZRpcCYd4eGFm99st7KYI-mHEhMhv9DWWtp7-PLUFZe-Pb1Pe4fw';

export const search = (query, type) => 
  fetch(URL(query, type), {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization : 'Bearer ' + token
    }
  }).then(data => data.json());

export const searchAlbums = (query) => 
  search(query, 'album');

export const searchArtists = (query) => 
  search(query, 'artist');

export const searchTracks = (query) => 
  search(query, 'track');

export const searchPlaylists = (query) => 
  search(query, 'playlist');

 