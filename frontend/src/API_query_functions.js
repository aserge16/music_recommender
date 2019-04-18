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
    var tracks = '';
    console.log(seed)
    if (seed.songs !== undefined) {
        for (var i = 0; i < seed.songs.length; i++) {
            var id = seed.songs[i].id;
            tracks += id + ','
        }
        tracks = tracks.slice(0, -1);
    }

    var artists = '';
    if (seed.artists !== undefined) {
        for (i = 0; i < seed.artists.length - 3; i++) {
            id = seed.artists[i].id;
            artists += id + ','
        }
        artists = artists.slice(0, -1);
    }

    var genres = '';
    if (seed.genres !== undefined) {
        for (i = 0; i < seed.genres.length; i++) {
            id = seed.genres[i].id;
            genres += id + ','
        }
        genres = genres.slice(0, -1);
    }

    try {
        axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: "Bearer " + token
            },
            params: {
                seed_tracks: tracks,
                seed_artists: artists,
                seed_genres: '',
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
        })
    } catch (error) {
        console.log(error);
    }
}


export async function getCategory(category, token, callback) {
    try {
        axios.get('https://api.spotify.com/v1/browse/categories/'+ category +'/playlists', {
            headers: {
                Authorization: "Bearer " + token
            },
            params: {
                limit: 5
            }
        }).then(function (res) {
            var playlists = [];
            for (var i = 0; i < res.data.playlists.items.length; i++) {
                var item = res.data.playlists.items[i];
                var playlist = {name:item.name, id:item.id};
                playlists[i] = playlist;
            }
            callback(playlists);
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
