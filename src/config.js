const TOKEN_API = 'BQBwnYuoOnxMblT6NpdeSFIaTSltqWsKqSH4HIkQGugPkU1k7d828xRGbBtXJJ3CiMzjfiA8H739LNHhIpL0z_526e8eovRSsjliv0Pt_dfW9riemGbjs-62WskxP_XAgCXyRLMNjwmf14dP0ckDGnvc_g';

const API_URL = 'https://api.spotify.com/v1';

const HEADERS = {
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${TOKEN_API}`,
  },
};

export { TOKEN_API, API_URL, HEADERS };
