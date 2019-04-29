const assert = require("assert");
const API = require("../API_for_test");

const token = "BQCLJz7qHggiIXK0-Ttdxa1KzfRc1x3aVpCsZxSg_OGjvradpCvvc3qorlbUDng0wux3B-nQjecOp_t-F2c";

describe('searchArtists', function() {
    it('searchArtists results have the right format', function() {
        API.searchArtists("david bowie", token, (artists) => {
            artists.forEach((artist) => {
                assert.deepEqual(Object.keys(artist), ["name", "id", "image_url"]);
                assert.equal(typeof artist.name, "string");
                assert.equal(typeof artist.id, "string");
                assert.equal(typeof artist.image_url, "string");
            });
        })
    });

    it('searchArtists with no results returns empty list', function() {
        // create a random search query with no results
        searchItem = "aidfhawkefawefawefnwaelflshgvaowh";

        API.searchArtists(searchItem, token, (artists) => {
            assert.equal(artists.length, 0);
        })
    });
});

describe('searchTracks', function() {
    it('searchTracks results have the right format', function() {
        API.searchTracks("under pressure", token, (tracks) => {
            tracks.forEach((track) => {
                assert.deepEqual(Object.keys(track), ["name", "id", "artists", "image_url"]);
                assert.equal(typeof track.name, "string");
                assert.equal(typeof track.id, "string");
                assert.equal(typeof track.artists, "object");
                assert.equal(typeof track.artists[0], "string");
                assert.equal(typeof track.image_url, "string");
            });
        });
    });

    it('searchTracks with no results returns empty list', function() {
        // create a random search query with no results
        searchItem = "aidfhawkefawefawefnwaelflshgvaowh";

        API.searchTracks(searchItem, token, (tracks) => {
            assert.equal(tracks.length, 0);
        })
    });
});

describe('searchGenres', function() {
    it('searchGenres results have the right format', function() {
        API.searchGenres("rock", (genres) => {
            genres.forEach((genre) => {
                assert.equal(typeof genre, "string");
            })
        });
    });

    it('searchGenres with no results returns empty list', function() {
        // create a random search query with no results
        searchItem = "aidfhawkefawefawefnwaelflshgvaowh";

        API.searchGenres(searchItem, (genres) => {
            assert.equal(genres.length, 0);
        })
    });
});

describe('getRecommendations', function() {
    it('getRecommendations results have the right format', function() {
        seed = {
            artist: [
                {
                    id: "0oSGxfWSnnOXhD2fKuz2Gy",
                    image_url: "https://i.scdn.co/image/6efa04809a6358a5da0e701d24449cfb8348ebf5",
                    name: "David Bowie"
                }
            ],
            songs: [
                {
                    artists: ["Queen", "David Bowie"],
                    id: "11IzgLRXV7Cgek3tEgGgjw",
                    image_url: "https://i.scdn.co/image/140a81a2d5930b281f6ce32d2e673461c5473718",
                    name: "Under Pressure - Remastered"
                }
            ],
            genres: ["j-rock"]
        };
        API.getRecommendations(seed, token, (recs) => {
            assert.equal(typeof recs, "object");
            recs.forEach((rec) => {
                assert.equal(typeof rec.name, "string");
                assert.equal(typeof rec.id, "string");
                assert.equal(typeof rec.artists, "object");
                assert.equal(typeof rec.artists[0], "string");
                assert.equal(typeof rec.image_url, "string");
            })
        });
    });
});