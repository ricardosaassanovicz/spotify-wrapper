global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
    token: 'BQBSv-pHVPLUq2SpY1Zmy39ms8SbgWtA5zqSegtO_H8kcfYY6gz1z4op4EGhaxKvhEgp7XC4SZRmlSCCjxG8i3Ui76Pyi__k7elj97V27Fs97_-TBuZxh3SisFnGf5LF3TRQAX1XYqa9Dl62lw6i0tAm_A',
});

const albuns = spotify.search.albums('Incubus');

albuns.then(data => data.albums.items.map(item => console.log(item.name)));