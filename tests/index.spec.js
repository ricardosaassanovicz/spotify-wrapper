import chai, { expect } from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from "../src/index";

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('SpotifyWrapper lib', () => {
    
    it('should create an instance of SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify).to.be.an.instanceof(SpotifyWrapper)
    });

    it('should create an instance of SpotifyWrapper with apiURL option', () => {
        let spotify = new SpotifyWrapper({
            apiURL: 'testeURL',
        });
        expect(spotify.apiURL).to.be.equal('testeURL');
    });

    it('should use the default apiURL if not provided', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });

    it('should receive token as an option', () => {
       let spotify = new SpotifyWrapper({
           token:'chundas',
       }); 
       expect(spotify.token).to.be.equal('chundas');
    });

    describe('request method', () => {
        
        let promise;
        let stubedFetch;
    
        beforeEach(() => {
            stubedFetch = sinon.stub(global, 'fetch');
            promise = stubedFetch.returnsPromise();
        });
    
        afterEach(() => {
            stubedFetch.restore();
        });

        it('should have request method', () => {
            let spotify = new SpotifyWrapper({});

            expect(spotify.request).to.exist;
        });

        it('should call fetch when request', () => {
            let spotify = new SpotifyWrapper({
                token: 'chundas',
            });

            spotify.request('url');
            expect(stubedFetch).to.have.been.calledWith('url')
        });

        it('should call fetch with right headers passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'chundas'
            });

            const headers = {
                headers:{
                    Authorization: `Bearer chundas`,
                },
            };

            spotify.request('chundas');
            expect(stubedFetch).to.have.been.calledWith('chundas', headers);

        });


    });
});
