import chai , { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { getAlbum, getAlbumTracks } from '../src/album';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');
//getAlbum
//getAlbumTracks

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

        it('should have method getAlbumTracks', () => {        
            expect(getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        it('should call fetch function', () => {
            const albums = getAlbum();
            expect(stubedFetch).to.been.calledOnce;
        });

        it('should call fetch the correct URL ', () => {
           const albums = getAlbum('1234'); 
           expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/1234');
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({album: 'name'});
            const album = getAlbum('1234');
            expect(album.resolveValue).to.be.eql({album: 'name'});
        });
    });
    

});