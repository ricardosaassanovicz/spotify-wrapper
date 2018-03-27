import  chai ,{ expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search.js';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

    describe('Search', () => {

        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });


        describe('Smoke tests', () => {

            it('should exist the search method', () => {
                expect(search).to.exist;
            });

            it('should exist the searchAlbums method', () => {
                expect(searchAlbums).to.exist;
            });

            it('should exist the searchArtists method', () => {
                expect(searchArtists).to.exist;
            });

            it('should exist the searchTracks method', () => {
                expect(searchTracks).to.exist;
            });

            it('should exist the searchPlaylists method', () => {
                expect(searchPlaylists).to.exist;
            });
        }); 

        describe('Generic Search', () => {

            it('should call fetch function', () => {
                const artists = search();
                expect(fetchedStub).to.have.been.calledOnce;
            });

            it('should receive the correct url to fetch', () => {
                context('passing one type', () => {
                    const artists = search('Incubus', 'artist');
                    expect(fetchedStub).to.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                    const albuns = search('Incubus', 'albuns');
                    expect(fetchedStub).to.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albuns');
                });
                
                context('passing more then one type', () => {
                    const artists = search('Incubus', ['artist', 'album']);
                    expect(fetchedStub).to.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
                });
            });

            it('should return the JSON data from the promise', () => {
                promise.resolves({ body: 'json' });
                const artists = search('Incubus', 'artist');

                expect(artists.resolveValue).to.be.eql({ body: 'json' });
            });
        }); 

        describe('searchArtists', () => {

            it('should call fetch function', () => {
                const artists = searchArtists('Incubus');

                expect(fetchedStub).to.have.been.calledOnce;                
            });

            it('should call fetch with the correct URL', () => {

                const artists = searchArtists('Incubus');
                expect(fetchedStub).to.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                const artists2 = searchArtists('Jorge e Matheus');
                expect(fetchedStub).to.been.calledWith('https://api.spotify.com/v1/search?q=Jorge e Matheus&type=artist');
            });

        });

        describe('searchAlbums', () => {
            
            it('should call fetch function', () => {
                const albums = searchAlbums('Incubus');
                expect(fetchedStub).to.been.calledOnce;
            });

            it('should call fetch with de correct URL', () => {
                const albums = searchAlbums('Incubus');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
            });

        });

        describe('searchTracks', () => {
            
            it('should call fetch function', () => {
                const tracks = searchTracks('Tracks');
                expect(fetchedStub).to.been.calledOnce;
            });

            it('should call fetch with the correct URL', () => {
                const tracks = searchTracks('Tracks');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tracks&type=track');
            });

        });

        describe('searchPlaylists', () => {
            
            it('should call fetch function', () => {
                const playlists = searchPlaylists('metallica');
                expect(fetchedStub).to.been.calledOnce;
            });

            it('should call fecth the correct URL', () => {
                const playlists = searchPlaylists('metallica');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=metallica&type=playlist');
            });

        });

});

