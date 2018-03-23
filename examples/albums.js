global.fetch = require('node-fetch');

import { searchAlbums } from '../src/main';

const albuns = searchAlbums('Incubus');

albuns.then(data => console.log(data));