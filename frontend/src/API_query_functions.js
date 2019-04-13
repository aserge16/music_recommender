var axios = require("axios");


export async function searchArtists(searchItem, token, callback) {
    try {
        axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: "Bearer " + token
            },
            params: {
                q: searchItem,
                type: "artist",
                limit: 15
            }
        }).then(function (res) {
            var artists = [];
            for (var i = 0; i < res.data.artists.items.length; i++) {
                var item = res.data.artists.items[i];
                var artist = {name:item.name, id:item.id, image_url:item.images[0].url};
                artists[i] = artist;
            }
            callback(artists);
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
    }
}


export async function searchTracks(searchItem, token, callback) {
    console.log(searchItem, token)
    axios.get('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: "Bearer " + token
        },
        params: {
            q: searchItem,
            type: "track",
            limit: 7
        }
    }).then(function (res) {
        var tracks = [];
        for (var i = 0; i < res.data.tracks.items.length; i++) {
            var item = res.data.tracks.items[i];
            var artists = [];
            for (var j = 0; j < item.artists.length; j++) {
                artists[j] = item.artists[j].name;
            }
            var track = {name:item.name, id:item.id, artists:artists, image_url:item.album.images[0].url};
            tracks[i] = track;
        }
        callback(tracks);
    }).catch(function (error) {
        console.log(error);
    })
}


export async function getRecommendations(seed, token, callback) {
    try {
        axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: "Bearer " + token
            },
            params: {
                seed_tracks: seed.songs,
                seed_artists: seed.artists,
                seed_genres: seed.genres,
                limit: 15
            }
        }).then(function (res) {
            var tracks = [];
            for (var i = 0; i < res.data.tracks.length; i++) {
                var item = res.data.tracks[i];
                var artists = [];
                for (var j = 0; j < item.artists.length; j++) {
                    artists[j] = item.artists[j].name;
                }
                var track = {name:item.name, id:item.id, artists:artists, image_url:item.album.images[0].url};
                tracks[i] = track;
            }
            callback(tracks);
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
}


export function getArtistWiki(name, callback) {
    axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
            format: "json",
            action: "query",
            prop: "extracts",
            exintro: "",
            explaintext: "",
            redirects: 1,
            titles: name,
        }
    }).then(function (res) {
        var result = res.data.query.pages;
        callback(result[Object.keys(result)[0]].extract)
    }).catch(function(error) {
        console.log(error);
    })
}


//searchArtists("queen")
//searchTracks("shotgun knees")
var songs = '5xhFyuXigbt6RAJR7k2aDs,1TKYPzH66GwsqyJFKFkBHQ';
var artists = '5xhFyuXigbt6RAJR7k2aDs';
var genres = "";
var seed = {songs:songs, artists:artists, genres:genres};
//getRecommendations(seed)
