import chai , { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
    
    let promise;
    let stubedFetch;

    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('Smoke tests', () => {
        
        it('should have method getAlbum', () => {        
            expect(getAlbum).to.exist;
        });

        it('should have method getAlbum', () => {        
            expect(getAlbums).to.exist;
        });

        it('should have method getAlbumTracks', () => {        
            expect(getAlbumTracks).to.exist;
        });

    });

    describe('getAlbum', () => {

        it('should call fetch function', () => {
            const album = getAlbum();
            expect(stubedFetch).to.been.calledOnce;
        });

        it('should call fetch the correct URL ', () => {
           const album = getAlbum('1234'); 
           expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/1234');
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({album: 'name'});
            const album = getAlbum('1234');
            expect(album.resolveValue).to.be.eql({album: 'name'});
        });

    });

    describe('getAlbums', () => {

        it('should call fetch function', () => {
            const albums = getAlbums();
            expect(stubedFetch).to.been.calledOnce;
        });

        it('should call fetch the correct URL', () => {
            const albums = getAlbums(['1232131231','12321123123']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=1232131231,12321123123');
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({albums: ['juca', 'alonso']});
            const albums = getAlbums(['juca', 'alonso']);
            expect(albums.resolveValue).to.be.eql({albums: ['juca', 'alonso']});
        });

    });

    describe('getAlbumTracks', () => {
        
        it('should call fetch function', () => {
            const tracks = getAlbumTracks();
            expect(stubedFetch).to.be.calledOnce;
        });

        it('should call fetch correct URL', () => {
            const tracks = getAlbumTracks('track de teste');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/track de teste/track');
        });

        it('should return the correct data fetch from Promise', () => {
            promise.resolves({track: 'só track boa'});
            const tracks = getAlbumTracks('só track boa');
            expect(tracks.resolveValue).to.have.been.eql({track: 'só track boa'});
        });

    });

});