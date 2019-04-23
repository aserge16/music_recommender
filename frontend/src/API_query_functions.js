var axios = require("axios");
var genres = require("./genre_seeds");


export async function searchArtists(searchItem, token, callback) {
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
            if (item.images.length !== 0) {
                var artist = {name:item.name, id:item.id, image_url:item.images[0].url};
            } else {
                artist = {name:item.name, id:item.id, image_url:""}
            }
            artists[i] = artist;
        }
        callback(artists);
    }).catch(function (error) {
        console.log(error);
    })
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

export async function searchGenres(searchItem, callback) {
    searchItem = searchItem.toLowerCase();
    var results = genres.genres.filter((genre) => genre.search(searchItem) !== -1)
    callback(results)
}


export async function getRecommendations(seed, token, callback) {
    var tracks = '';
    if (seed.songs !== undefined) {
        for (var i = 0; i < seed.songs.length; i++) {
            var id = seed.songs[i].id;
            tracks += id + ','
        }
        tracks = tracks.slice(0, -1);
    }

    var artists = '';
    if (seed.artists !== undefined) {
        for (i = 0; i < seed.artists.length; i++) {
            id = seed.artists[i].id;
            artists += id + ','
        }
        artists = artists.slice(0, -1);
    }

    if (seed.genres !== undefined) {
        var genres = '';
        for (i = 0; i < seed.genres.length; i++) {
            id = seed.genres[i];
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
                seed_genres: genres,
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

export async function getRelatedArtists(artists, token, callback) {
    // Given a list of artists id, find all their related artists and combine them
    // into a single list. Then sort the list by the artist's popularity
    // and return the first 15 results.
    var allRequests = artists.map((id) => {
        return axios.get(`https://api.spotify.com/v1/artists/${id}/related-artists`,
            {
                headers: {
                Authorization: "Bearer " + token
                }
            }
    )});

    axios.all(allRequests).then(function (res) {
        // combine results, merge into a single list
        var allRelatedArtists = res.map(result => result.data.artists)
        allRelatedArtists = allRelatedArtists.flat(1)

        // sort the list based on popularity, take first 15 results
        allRelatedArtists.sort((a, b) => b.popularity - a.popularity)
        var toReturn = allRelatedArtists.slice(0, 15)
        callback(toReturn)
        
    }).catch(function (error) {
        console.log(error);
    })
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
