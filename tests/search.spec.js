import  chai ,{ expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

    describe('Search', () => {
        let spotify;
        let fetchedStub;
        let promise;

        beforeEach(() => {
            spotify = new SpotifyWrapper({
                token: 'chundas',
            });

            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        describe('Smoke tests', () => {

            it('should exist the albums method', () => {
                expect(spotify.search.albums).to.exist;
            });

            it('should exist the artists method', () => {
                expect(spotify.search.artists).to.exist;
            });

            it('should exist the tracks method', () => {
                expect(spotify.search.tracks).to.exist;
            });

            it('should exist the playlists method', () => {
                expect(spotify.search.playlists).to.exist;
            });
        });       

        describe('spotify.search.artists', () => {

            it('should call fetch function', () => {
                const artists = spotify.search.artists('Incubus');

                expect(fetchedStub).to.have.been.calledOnce;                
            });

            it('should call fetch with the correct URL', () => {

                const artists = spotify.search.artists('Incubus');
                expect(fetchedStub).to.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                const artists2 = spotify.search.artists('Jorge e Matheus');
                expect(fetchedStub).to.been.calledWith('https://api.spotify.com/v1/search?q=Jorge e Matheus&type=artist');
            });

        });

        describe('spotify.search.albums', () => {
            
            it('should call fetch function', () => {
                const albums = spotify.search.albums('Incubus');
                expect(fetchedStub).to.been.calledOnce;
            });

            it('should call fetch with de correct URL', () => {
                const albums = spotify.search.albums('Incubus');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
            });

        });

        describe('spotify.search.tracks', () => {
            
            it('should call fetch function', () => {
                const tracks = spotify.search.tracks('Tracks');
                expect(fetchedStub).to.been.calledOnce;
            });

            it('should call fetch with the correct URL', () => {
                const tracks = spotify.search.tracks('Tracks');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tracks&type=track');
            });

        });

        describe('spotify.search.playlists', () => {
            
            it('should call fetch function', () => {
                const playlists = spotify.search.playlists('metallica');
                expect(fetchedStub).to.been.calledOnce;
            });

            it('should call fecth the correct URL', () => {
                const playlists = spotify.search.playlists('metallica');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=metallica&type=playlist');
            });

        });

});

