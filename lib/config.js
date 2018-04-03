'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOKEN_API = 'BQBwnYuoOnxMblT6NpdeSFIaTSltqWsKqSH4HIkQGugPkU1k7d828xRGbBtXJJ3CiMzjfiA8H739LNHhIpL0z_526e8eovRSsjliv0Pt_dfW9riemGbjs-62WskxP_XAgCXyRLMNjwmf14dP0ckDGnvc_g';

var API_URL = 'https://api.spotify.com/v1';

var HEADERS = {
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ' + TOKEN_API
  }
};

exports.TOKEN_API = TOKEN_API;
exports.API_URL = API_URL;
exports.HEADERS = HEADERS;